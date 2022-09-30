import React from 'react'

/* importing CSS */
import Styles from '../styles/pages/refundPolicy.module.css'

const refundPolicy = () => {
  return (
    <div className={Styles.refundPolicyContainer }>
        <h1 className={Styles.refundTitle}>Refund policy</h1>
        <div className="refund_wrap">
                <div className={Styles.refundSubContainer}>
                    <h4 className={Styles.refundSubTitle}>Grafterr offers a 7 day money back guarantee - if you are not satisfied with our product, you can return it to us for a refund.</h4>
                    <p className={Styles.refundSubParagraph}>Should you wish to return your purchase for a refund, you must do so within 7 day upon delivery of the product. The product(s) you have purchased must be unused, still in their original packaging and must be in ‘as new” and resalable condition.</p>
                    <p className={Styles.refundSubParagraph}>Once our warehouse team receives the product you have returned, Grafterr will inspect the returned goods for damage and if returned in the required condition, we will issue a full refund to your original method of payment.</p>
                    <p className={Styles.refundSubParagraph}>If you return a product as it is faulty, it will only be accepted if the product is deemed to be faulty by the manufacturer in compliance with the End-User License Agreement. Grafterr will replace any faulty product upon receipt of the manufacturer’s attestation that the product is faulty.</p>
                </div>

				
                <div className={Styles.refundSubContainer}>
                    <h4 className={Styles.refundSubTitle}>Return cost</h4>
                    
                    <p className={Styles.refundSubParagraph}>Should you wish to return your goods to us, you will be responsible for the delivery costs associated with the return. Grafterr can organise a collection on your behalf but the associated costs will be deducted from your total refund amount.</p>
                    <p className={Styles.refundSubParagraph}>If your goods are deemed to be faulty by our product team and you require a replacement, Grafterr will cover the associated costs of the delivery and collection of any replacement items.</p>
                </div>
				
                <div className={Styles.refundSubContainer}>
                    <h4 className={Styles.refundSubTitle}>Products damaged in transit</h4>
                    
                    <p className={Styles.refundSubParagraph}>If your goods are damaged upon delivery, you need to report this to us within seven working days of delivery. If the packaging is visibly damaged when you receive it, it is required that you mention this to the delivery carrier.</p>
                    <p className={Styles.refundSubParagraph}>Should the goods be damaged and need to be replaced, the goods should be made available for collection with original packaging including all accessories and documentation. Grafterr will arrange collection and process replacement goods to be sent out.</p>
                </div>

                <div className={Styles.refundSubContainer}>
                    <h4 className={Styles.refundSubTitle}>Products become faulty within manufacturer’s warranty period</h4>
                    
                    <p className={Styles.refundSubParagraph}>All products come with a 12 month manufacturers warranty. If any of the products you have purchased develop a fault within the first 12 months of purchase, and are covered under the warranty period then the product is entitled to a warranty repair or replacement. </p>
                </div>
                <div className={Styles.refundSubContainer}>
                    <h4 className={Styles.refundSubTitle}>Terms &amp; conditions</h4>
                    
                    <p className={Styles.refundSubParagraph}>Please review our terms and conditions for clarification on our refund and returns policy. The statutory rights mentioned above are in addition to our user terms &amp; conditions that are provided to you prior to your purchase.</p>
                    <p className={Styles.refundSubParagraph}>Grafterr is always pleased to support its customers directly upon any queries from them. Under European Legislation, if you are dissatisfied with the way that we suggest to resolve any issue that you have with our product; then you may make a formal complaint to our customer support team. </p>
                </div>

            </div>
    </div>
  )
}

export default refundPolicy