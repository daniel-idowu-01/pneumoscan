"""
Postprocessing Module
Formats prediction results for API response
"""

import logging
from typing import Dict, List

logger = logging.getLogger(__name__)

class ResultsFormatter:
    """Format prediction results for API response"""
    
    def format_results(self, prediction_result: Dict, scan_id: str) -> Dict:
        """
        Format prediction results into standardized response
        
        Args:
            prediction_result: Raw prediction results from predictor
            scan_id: Unique scan identifier
            
        Returns:
            Formatted results dictionary
        """
        try:
            has_pneumonia = prediction_result['has_pneumonia']
            confidence = prediction_result['confidence']
            
            formatted = {
                'scan_id': scan_id,
                'prediction': 'pneumonia' if has_pneumonia else 'normal',
                'confidence': round(confidence, 4),
                'probabilities': {
                    'pneumonia': round(prediction_result['pneumonia_probability'], 4),
                    'normal': round(prediction_result['normal_probability'], 4)
                },
                'severity': prediction_result.get('severity'),
                'findings': prediction_result.get('findings', []),
                'metadata': {
                    'threshold_used': prediction_result.get('threshold_used'),
                    'inference_time_ms': round(prediction_result.get('inference_time_ms', 0), 2),
                    'method': prediction_result.get('method', 'standard')
                }
            }
            
            # Add TTA-specific info if available
            if 'prediction_std' in prediction_result:
                formatted['metadata']['prediction_std'] = round(
                    prediction_result['prediction_std'], 4
                )
                formatted['metadata']['num_augmentations'] = prediction_result.get('num_augmentations')
            
            return formatted
            
        except Exception as e:
            logger.error(f"Result formatting error: {e}")
            raise
    
    def format_batch_results(
        self,
        prediction_results: List[Dict],
        scan_ids: List[str]
    ) -> List[Dict]:
        """
        Format batch prediction results
        
        Args:
            prediction_results: List of raw prediction results
            scan_ids: List of scan identifiers
            
        Returns:
            List of formatted results
        """
        formatted_results = []
        
        for result, scan_id in zip(prediction_results, scan_ids):
            try:
                formatted = self.format_results(result, scan_id)
                formatted_results.append(formatted)
            except Exception as e:
                logger.error(f"Error formatting result for {scan_id}: {e}")
                formatted_results.append({
                    'scan_id': scan_id,
                    'error': str(e)
                })
        
        return formatted_results
    
    def create_clinical_report(self, formatted_result: Dict) -> str:
        """
        Generate a clinical report from formatted results
        
        Args:
            formatted_result: Formatted prediction results
            
        Returns:
            Clinical report as formatted string
        """
        scan_id = formatted_result['scan_id']
        prediction = formatted_result['prediction'].upper()
        confidence = formatted_result['confidence'] * 100
        findings = formatted_result.get('findings', [])
        severity = formatted_result.get('severity', 'N/A')
        
        report = f"""
╔════════════════════════════════════════════════════════════════╗
║                  PNEUMONIA DETECTION REPORT                    ║
╚════════════════════════════════════════════════════════════════╝

Scan ID: {scan_id}

DIAGNOSIS:
  Result: {prediction}
  Confidence: {confidence:.1f}%
  {f'Severity: {severity.upper()}' if severity != 'N/A' else ''}

FINDINGS:
"""
        
        for i, finding in enumerate(findings, 1):
            report += f"  {i}. {finding}\n"
        
        report += f"""
PROBABILITIES:
  Pneumonia: {formatted_result['probabilities']['pneumonia'] * 100:.1f}%
  Normal:    {formatted_result['probabilities']['normal'] * 100:.1f}%

TECHNICAL DETAILS:
  Inference Time: {formatted_result['metadata']['inference_time_ms']:.2f}ms
  Threshold Used: {formatted_result['metadata']['threshold_used']}
  Method: {formatted_result['metadata']['method'].upper()}

═══════════════════════════════════════════════════════════════════
DISCLAIMER: This is an AI-assisted diagnosis and must be verified
by a qualified healthcare professional. This report should be used
as a supplementary tool for clinical decision-making.
═══════════════════════════════════════════════════════════════════
"""
        
        return report
    
    def format_error_response(self, scan_id: str, error_message: str) -> Dict:
        """
        Format error response
        
        Args:
            scan_id: Unique scan identifier
            error_message: Error description
            
        Returns:
            Formatted error response
        """
        return {
            'scan_id': scan_id,
            'status': 'error',
            'error': error_message,
            'prediction': None,
            'confidence': None
        }