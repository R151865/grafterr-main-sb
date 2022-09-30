import Link from 'next/link'
import React from 'react'

import Styles from '../styles/pages/termsAndConditions.module.css'

const termsAndConditions = () => {
  return (
    <div className={Styles.termsAndConditionContainer}>
        <h1 className={Styles.termsAndConditionTitle}>Terms and conditions</h1>
        <div className='px-4'>
                <p className={Styles.termsAndConditionSubParagraph}>This Customer Agreement (the “Agreement”) sets out the terms and conditions (the “Terms”) by which iHybrid Limited (“we”, “our”, “Grafterr” or the “Company”) provides access to our Cloud Software and/or Hardware Services, which you (“you”, “your”, “the User” or “the Customer”) purchase and/or subscribe to. Each a “Party” and collectively the “Parties” to this Agreement. </p>
                <p className={Styles.termsAndConditionSubParagraph}>Please read these Terms and Conditions carefully before using the Software and/or Hardware provided by iHybrid Limited. </p>
                <h4 className={Styles.termsAndConditionSubTitle}>1. Terms of Use </h4>
                 <p className={Styles.termsAndConditionSubParagraph}><span ></span></p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>1.1.By using any company services, you agree to be bound by the Terms herein. If you do not agree to any of these Terms, do not use any company services.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>1.2. These terms and conditions apply to all users who receive access to Cloud Software and/or Hardware services provided by Grafterr, irrespective of whether the users pay a subscription fee or not. Any other terms, conditions, or representations (other than those made fraudulently or implied by statute) are excluded.  
                       </li>
                    <li className={Styles.termsAndConditionSubParagraph}>1.3. We reserve the right, at any time, to amend, modify, alter, or update the terms and conditions of this agreement. We will endeavour to notify the users of such changes via email or from our App. If you continue to use the Company’s services, your use will be governed by the updated terms. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>1.4. No agency, partnership, joint venture, or employment is created as a result of these Terms, and the User does not have any authority of any kind to bind the Company in any respect whatsoever.
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>1.5.Subject to the terms herein, all rights conferred by these Terms are granted to the User in a food serving business. No part of the Software may be used for other purposes, including, but not limited to, research, study, competitor analysis or any other activity prohibited by this agreement.
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>1.6. By agreeing to the terms and conditions herein the User warrants that they are not and will not be deemed a ‘consumer’ as defined in The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.</li>

                </ul>
                <p className={Styles.termsAndConditionSubParagraph}>These terms were last updated on 24<sup>th</sup>  January 2022. </p>
                <h4 className={Styles.termsAndConditionSubTitle}>2. Definitions and Interpretations </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>2.1.iHybrid Limited is a software development company and not a website development consultancy firm. As a SaaS company (“SaaS” stands for Software as a Service), we host an application(s) and make it (them) available to customers over the internet. This infers that the software sits on a SaaS company's server while the user accesses it remotely. We do not offer any website development and/or custom application development services. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.2. Grafterr Services shall refer to any Cloud Software services, including, but not limited to, Electronic Point of Sales (ePOS), web ordering, mobile apps ordering and QR Code ordering, and/or any Hardware services provided to the User by the Company (each a “Service” and collectively the “Services”).  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.3.  “Consumer” and/or “End User” refers to the client of the User who is making a purchase for food services from the User via our Platform. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.4. “Business Day” is a day other than a Saturday, Sunday, or public holiday in England when banks in London are open for business. “Business Hours” refers to the hours between 9am and 5pm on a Business Day. </li>
                    <li className={Styles.termsAndConditionSubParagraph}> 2.5. “Platform” means the technology (hardware and software) provided by Grafterr, as a SaaS company, to facilitate food ordering. The products and services that we provide through our Platform, regardless of whether fees are charged, are also referred to as “Platform Services”. A “Platform Fee” means a fee paid by the End User to Grafterr, in consideration for each individual transaction processed via the Grafterr Platform, in addition to any order and delivery fees. Platform Fees are not Merchant Fees. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.6.  A “License Subscription Fee” is the minimum monthly/annual fee, if any, paid by the User to Grafterr for access to our Cloud Software. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.7. “Payment Service Providers” connect the User (the User may also be referred to as a “Merchant” with relation to any/all payment processing) to their consumers, card brand networks and financial institutions to deliver a simple payment experience for users and their customers by processing payments quickly and efficiently. Payment Service Providers may provide both a merchant account and a payment gateway. A “Merchant Account” is a type of business bank account that allows a business to accept and process electronic payment card transactions. A “Payment Gateway” is a technology used by merchants to accept debit or credit card purchases from customers. The term includes not only the physical card-reading devices found in brick-and-mortar retail stores but also the payment processing portals found in online stores. Grafterr may charge the User “Merchant Fees” for any/all payment processing services they provide to the User to accept payments from end users. Merchant Fees are not Platform Fees. For further information on Payment Service Providers and payment processing, please refer to Sections 13 and 14. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.8.  Users who have integrated Grafterr payments powered by Stripe as their Payment Service Provider are referred to as “Connected Accounts”. The User is required to agree to the terms and conditions of a Stripe Connected Account Agreement to create a Connected Account. 
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.9.“Personal Data” means any information relating to an identified or identifiable natural person (“Data Subject”); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.10.  “Confidential Information” shall mean certain information and materials, either marked “confidential” or “proprietary” or that a reasonable business person would expect to be confidential or proprietary, including but not limited to information relating to a disclosing party’s or its Group’s business, operations and products, trade secrets, methodologies, potential products, services, processes, customers, business relationships, marketing materials, strategic plans, ideas, research data, development, costs, technologies, financial information and pricing information. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.11. “Virus” refers to any device or thing (including any software, code, file or programme) which may: prevent, impair or otherwise adversely affect the operation of any computer software, hardware or network, any telecommunications service, equipment or network or any other service or device; prevent, impair or otherwise adversely affect access to or the operation of any programme or data, including the reliability of any programme or data (whether by rearranging, altering or erasing the programme or data in whole or part or otherwise); or adversely affect the user experience, including worms, Trojan horses, viruses and other similar things or devices.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.12. S Section headings shall not affect the interpretation of these Terms. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2.13.Unless the context otherwise requires, words in the singular shall include the plural, and in the plural shall include the singular. </li>

                </ul>
                <h4 className={Styles.termsAndConditionSubTitle}>3. Account Information </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>3.1.You must be at least 18 years old to purchase and/or subscribe for a licence to access and use our Cloud Software and/or Hardware services. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>3.2. You agree to provide accurate, current and complete information during the subscription process and to update such information to keep it accurate, current and complete. Any significant updates to the User’s personal account information, governed by the Data Protection Act 2018, shall be requested in writing to info@eposhybrid.com with a valid reason for the requested changes. Grafterr, in its sole discretion and where deemed necessary, reserves the right to request proof of any changes with relation to personal data.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>3.3. We reserve the right to suspend or terminate your subscription and your access to our Cloud Software Services if any information provided during the subscription process or thereafter proves to be inaccurate, not current or incomplete.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>3.4.Once terminated, the Company shall permanently delete the User’s account and all data associated with it. The Company shall not be held responsible for the User’s account data after termination.  </li>
                </ul>

                <h4 className={Styles.termsAndConditionSubTitle}>4. Data Protection and Security</h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>4.1.The Company endeavours to use reasonable security measures to keep the User’s personal data highly confidential and protect the User against unauthorized access to their account, account information, and any data which may be stored by the Company Cloud Software. However, the Company cannot guarantee absolute security of a user’s account, account information and/or data, and the Company cannot promise that the security measures will prevent third-party “attackers” from illegally accessing the Services or their content. The User acknowledges that their submission of any information on or through the Services is at the User’s own risk and the User accepts all risks of unauthorized access to the Services, account information and any other information provided to the Company or through the Software.
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.2.For the avoidance of confusion, the User shall typically function as the "Data Controller" for any personal data they supply to Grafterr to perform our services. While the data controller will determine the motives and means of processing personal data, the data processor will process the data on behalf of the data controller. Therefore, Grafterr is a "Data Processor" that processes personal data on behalf of the Data Controller while they are using the Grafterr services. Any such data controlled by the User shall be governed by the Data Protection Act 2018. Grafterr shall not be held liable for any breach in data protection legislation by the User. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.3.  Grafterr, in its capacity of Data Processor, can only process data currently stored on the Cloud Software. Any data permanently modified or deleted from the Cloud Software or the User’s personal account, cannot be retrieved and Grafterr carries no responsibilities with relation to any such previous data.  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.4.Data controllers will hold the responsibility for the implementation of relevant technical and organisational measures to substantiate and demonstrate that their data is processed in compliance with the Data Protection Act 2018. All obligations regarding concepts such as lawfulness, transparency and fairness, data minimisation, purpose limitation, and preciseness, as well as fulfilling data subject requests lie with the Data Controller.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.5. Grafterr does not have any kind of authority over the data protection notices, policies, and terms and conditions of the User. Therefore, the User will forfeit and keep Grafterr and its affiliates forfeited against all losses, costs, and liabilities and all expenses incurred, including reasonable legal or other professional expenses, arising out of or in connection with any claim regarding: </li>
                    <ul >
                        <li className={Styles.termsAndConditionSubParagraph}>4.5.1. a breach to the Data Protection Act 2018, or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>4.5.2. any whatsoever liability emerging in respect of the cookies, or</li>
                        <li className={Styles.termsAndConditionSubParagraph}>4.5.3. the capture of Personal Data through the User’s website(s), or</li>
                        <li className={Styles.termsAndConditionSubParagraph}>4.5.4.the agreement of data subjects for dispersing any Personal Data outside of the European Economic Area by Grafterr.</li>
                        <li className={Styles.termsAndConditionSubParagraph}>4.5.5.  Any liability under this subsection will not be subject to any limitation of liability or exclusions of liability under the Agreement.</li>
                    </ul>
                    <li className={Styles.termsAndConditionSubParagraph}>4.6. Grafterr shall inform the Data Controller without any undue delay or within seven (7) days upon Grafterr or any sub-processor observe a breach impacting personal data. At this point in time Grafterr will provide the Customer with all adequate information required to meet any obligation so as to inform the concerned data protection authority or to inform the victim under applicable Data Protection laws. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.7.Grafterr shall concur to guide the User with all subject access requests that may be obtained from the end-customer within an appropriate time limit (at the User’s cost), nonetheless, Grafterr shall ensure that adequate technical and organisational measures are in place, so that the User can meet its obligations to those requesting access to their personal data held by Grafterr. The Company’s assistance with regards to subject access requests is limited to any data currently stored by the User on the Cloud Software. Grafterr will not be able to retrieve any old data previously modified or deleted from the Cloud.  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.8. The User hereby consents that Grafterr may engage any of its subcontractors as sub-processors without the requirement of further consent. Therefore, the subcontractors are considered as approved under this clause. The User may request a full list of current sub-processors at any time. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.9. The Company shall not be held liable for any losses arising out of the unauthorized use of a User’s account and the User agrees to defend, indemnify and hold the Company harmless, including the officers, directors, shareholders, employees, distributors, agents, partners, licensors, information providers and account providers, as applicable, from and against any improper, unauthorized or illegal uses of the User’s account.  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.10.The User’s login credentials may only be used by the User. Sharing a login with other people is not permitted. An organization may create separate logins for as many individual users as it wishes. Each user is responsible for maintaining the security of their account login and passwords. Each user agrees that they will not disclose their password to any third party and that they will take sole responsibility for any activities or actions under the User’s account, whether or not you have authorised such activities or actions.  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.11.The user agrees to immediately notify the Company of any unauthorised use of their account, or any other breach of security at info@eposhybrid.com. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.12.Right to Erasure or Restriction of Processing: Section 47 of Data Protection Act 2018. The User reserves the right to request an erasure of all their personal data from the Grafterr user account records, should the User wish to do so once this agreement is terminated. Any such Right to Erasure request must be communicated to Grafterr in writing to info@eposhybrid.com. In cases where personal data must be maintained for the purposes of evidence, Grafterr shall (instead of erasing the personal data) restrict its processing. In addition, as a Data Controller, it is the User’s responsibility to comply with any Right to Erasure requests received by the User from any of their customers regarding data stored on the Cloud Software. Grafterr, as a Data Processor, carries no responsibility with regards to any Right to Erasure requests received by the User from any of their customers.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>4.13. In addition to the terms of this Agreement, and Section 4 in particular, the User should read and understand the terms of the Company’s Privacy Policy and Cookie Policy for further information on how Grafterr collects and processes personal information. By using our services, the User automatically agrees to the Company’s Privacy Policy and Cookie Policy.</li>
                </ul>
                <h4 className={Styles.termsAndConditionSubTitle}>5. Grafterr Hardware </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>5.1. The User may purchase hardware from Grafterr with or without a valid Cloud Software license subscription. Where the User purchases our hardware for use with a different software, Grafterr cannot guarantee that the hardware shall be compatible with the User’s software. The Company is not responsible for ensuring the User’s software compatibility to our hardware.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.2.It is the User’s responsibility to research fully whether any hardware purchased from Grafterr shall meet their requirements and expectations. All hardware descriptions and some video demonstrations are available online at <a href="https://www.eposhybrid.com/">https://www.eposhybrid.com/</a>. Should the User require any further information, the User should contact our Team. The User is encouraged to make full use of these resources in order to make an informed decision when purchasing our hardware. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.3. All ePOS hardware purchased via our website directly shall automatically qualify for an “ePOS Freemium” license subscription to our Cloud Software. Please refer to Sections 7 for further details on “ePOS Freemium” subscriptions. 
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.4.All hardware purchases require a full upfront payment at the time of placing an order for dispatch.  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.5.  All prices are listed and charged to the User’s bank account in GBP (£). Any charges for transactions in foreign currency, other than GBP (£), shall be payable by the User. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.6. All hardware comes flat packed with instruction manuals/guides to help the User carry out full assembly of the equipment. The Company shall not be sending any engineers to carry out any installation or troubleshooting at the User’s location at any time.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.7. All hardware provided by the Company comes with one (1) year basic manufacturing warranty from the delivery dispatch date. </li>
                    <li className={Styles.termsAndConditionSubParagraph}></li>
                    <ul >
                        <li className={Styles.termsAndConditionSubParagraph}>5.7.1. In the event of a reasonable technical fault, the Company shall endeavour to troubleshoot any issues remotely, or request for the faulty hardware to be returned via the Warranty Returns Process in Section 17. </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.7.2. The Company reserves the right to repair the same faulty piece of equipment as many times as needed before offering a replacement or refund. The Company shall offer a replacement or refund only if the faulty equipment is
                            non repairable. </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.7.3. Replacement hardware may be a refurbished piece of equipment with the same or better technical specification of the original hardware.</li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.7.4. Upon replacement, the warranty remains one (1) year from the date of initial contract, not from the replacement date. </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.7.5. Theft, fire, tampering and mishandling is not covered under basic manufacturing warranty.
                        </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.7.6.</li>
                        <li className={Styles.termsAndConditionSubParagraph}>The Company is not liable if the hardware becomes unusable due to third-party software including, but not limited to, manufacturers and operating systems. No repair, replacement or refund shall be offered to the User in any such
                            cases. </li>
                    </ul>
                    <li className={Styles.termsAndConditionSubParagraph}>5.6. The Company, its subsidiaries, affiliates, and its licensors, do not warrant that:
                    </li>
                    <ul >
                        <li className={Styles.termsAndConditionSubParagraph}>5.6.1. The Hardware will meet the User’s specific requirements; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.6.2. The quality of the software, hardware and any other material purchased or obtained by the User will meet all the User’s expectations; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.6.3. The Hardware will never develop any faults, errors and/or inaccuracies. </li>
                        <li className={Styles.termsAndConditionSubParagraph}>5.6.4. The Hardware will be compatible with newer versions of the Cloud Software, and/or any other software, for the duration of the lifetime of the Hardware purchased. At some point in the future, and it is impossible to predict
                            with exact certainty when this may happen, after the expiration of the one (1) year basic manufacturing warranty, the Hardware may become obsolete. The Company shall endeavour to inform the User, within reasonable time, should
                            the Company stop providing technical support and software updates for a particular version of the Hardware. </li>
                    </ul>
                    <li className={Styles.termsAndConditionSubParagraph}>5.7. All hardware provided by the Company comes with one (1) year basic manufacturing warranty from the delivery dispatch date. 
                    </li>
                    <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>5.7.1. In the event of a reasonable technical fault, the Company shall endeavour to troubleshoot any issues remotely, or request for the faulty hardware to be returned via the Warranty Returns Process in Section 17. </li>

                    <li className={Styles.termsAndConditionSubParagraph}>5.7.2. The Company reserves the right to repair the same faulty piece of equipment as many times as needed before offering a replacement or refund. The Company shall offer a replacement or refund only if the faulty equipment is non-repairable. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.7.3. Replacement hardware may be a refurbished piece of equipment with the same or better technical specification of the original hardware. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.7.4. Upon replacement, the warranty remains one (1) year from the date of initial contract, not from the replacement date.   </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.7.5. Theft, fire, tampering and mishandling is not covered under basic manufacturing warranty. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.7.6. The Company is not liable if the hardware becomes unusable due to third-party software including, but not limited to, manufacturers and operating systems. No repair, replacement or refund shall be offered to the User in any such cases. </li>
                    </ul>

                    <li className={Styles.termsAndConditionSubParagraph}>5.8. The Company, its subsidiaries, affiliates, and its licensors, do not warrant that: </li>
                    <ul>
                    <li className={Styles.termsAndConditionSubParagraph}>5.8.1. The Hardware will meet the User’s specific requirements; or </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.8.2. The quality of the software, hardware and any other material purchased or obtained by the User will meet all the User’s expectations; or</li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.8.3. The Hardware will never develop any faults, errors and/or inaccuracies.  </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5.8.4. The Hardware will be compatible with newer versions of the Cloud Software, and/or any other software, for the duration of the lifetime of the Hardware purchased. At some point in the future, and it is impossible to predict with exact certainty when this may happen, after the expiration of the one (1) year basic manufacturing warranty, the Hardware may become obsolete. The Company shall endeavour to inform the User, within reasonable time, should the Company stop providing technical support and software updates for a particular version of the Hardware.  </li>
                    </ul>
                    <li className={Styles.termsAndConditionSubParagraph}>5.9. The User shall obtain appropriate insurance to cover all hardware equipment, any other equipment, belongings and property against fire, theft, accidental damage and any other damage occurring due to an unlikely failure in any hardware provided by Grafterr. The Company shall not be held responsible for any loss of profits, business, goodwill, use, data or other intangible and tangible losses resulting from a failure in any hardware provided by Grafterr.</li>
                   <li className={Styles.termsAndConditionSubParagraph}>5.10. Portable Appliance Testing (PAT) of all hardware equipment should be carried out by an individual deemed competent to do so. This is usually a trained individual with a valid Certificate of Competency in PAT testing. It is the User’s responsibility to ensure all hardware equipment is PAT tested regularly to comply with UK laws and regulations. Grafterr shall not be responsible for carrying out PAT tests or reminding the User of the need to carry out regular PAT testing.</li>

                </ul>

                <h4 className={Styles.termsAndConditionSubTitle}>6. Cloud Software </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>6.1. The User can purchase our Cloud Software (the “Software”) license subscription with or without hardware provided by Grafterr. Should the User decide not to purchase hardware from Grafterr, the User agrees that they have access to hardware fully compatible with our Cloud Software. Where the User does not purchase our hardware, the Company shall not be held responsible if the software fails to work. The Company is not responsible for ensuring the User’s hardware compatibility to our Cloud Software. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.2. Our Cloud Software requires a suitable, fast, stable and reliable internet connection to ensure full and effective functionality of the Software. Grafterr recommends the use of wired internet connection for better connectivity,
                        although this recommendation does not guarantee performance of the User’s internet provider. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.3. The Software is provided on an "as is" and "as available" basis. The Software is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness
                        for a particular purpose, non-infringement or course of performance. The use of the Software is at the sole risk of the User. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.4. The Company shall endeavour to promptly address any technical glitches encountered while using the software, providing such glitches are brought to the Company’s attention immediately. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.5. The Company, its subsidiaries, affiliates, and its licensors, do not warrant that: </li>
                    <ul >
                        <li className={Styles.termsAndConditionSubParagraph}>6.5.1. The Software will meet the User’s specific requirements; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>6.5.2. The quality of the software, hardware and any other material purchased or obtained by the User will meet all the User’s expectations; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>6.5.3. The Software will always be accurate or reliable; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>6.5.4. The Software will be uninterrupted, timely, secure, or error-free; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>6.5.5. The Software is free of viruses or other harmful components; or </li>
                        <li className={Styles.termsAndConditionSubParagraph}>6.5.6. Any/all errors in the Software will be corrected. </li>
                    </ul>
                    <li className={Styles.termsAndConditionSubParagraph}>6.6. The Software contains generic settings for all aspects including taxations, promotions and menu setup. These are customisable as per the User’s needs. It is the User’s responsibility to update all necessary “Settings” before using
                        the Software.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.7. In the event that the User is required to download any other software in connection with the Cloud Software, the User shall be unable to download and access such software unless they first agree to the license agreement relating
                        to that software. Use of any such software is governed by these terms of use for any such license agreement.
                    </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.8. The User shall upload all menus, promotions and all other necessary data into the Cloud Software. The Company solely provides guidance on the procedure of uploading data onto the Software but the User holds the responsibility
                        to upload the data themselves. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.9. All data uploaded by the User onto the Cloud Software is stored for the duration of the license subscription. The User shall download all data they wish to save before the license subscription is terminated. Once the license subscription
                        is terminated, all data is permanently deleted. There is no possible way to retrieve deleted data. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.10. Any data deleted, at any time, from the Cloud Software cannot be restored. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.11. The Company shall take backups, at least once every 24 hours, of all customers’ data and keep a copy. However, it is recommended that users themselves take regular backups of data from the Cloud Software. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.12. In the event of an internet connection malfunction, Grafterr can run certain Software features offline. During such times, all data shall be stored on the User’s hardware. However, the User needs to connect to the internet
                        within thirty (30) days of the start of offline trading in order to transfer all data stored on the device to the Cloud Software. If no internet connection is established within thirty (30) days of the start of offline trading,
                        all or some data will be lost and/or the system may stop working. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.13. To access the full features of the Software, the User shall ensure a suitable, fast, stable and reliable internet connection.</li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.14. Should the User require any additional new functionality of the Software, the User may submit a request in writing to the Company for assessment. The Company shall, within reasonable time, endeavour to review any such request
                        and assess the compatibility of such new functionality within the Company’s services. The Company does not guarantee that it will be possible to implement any additional new functionality within the Company’s services. In addition,
                        all design and/or functionality requests with potential of copyright infringement, with regards to a competitor company, shall be rejected. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.15. Grafterr currently uses a Cloud server facility located in the country of Ireland, with an additional backup server facility in Singapore. Both of these locations are subject to change based on financial motives or risk to
                        the data stored. Grafterr shall review these server facility locations as deemed needed by the Company. The Company shall not be required to obtain the User’s consent should the Company decide to move the Cloud server facility
                        to a new location. </li>
                    <li className={Styles.termsAndConditionSubParagraph}>6.16. Cloud servers have 99% uptime. Should there be any planned maintenance of the servers, the Company shall endeavour to notify the User in advance of such planned maintenance. In the unlikely event of an unplanned disruption to
                        the server functionality, the Company shall not be held liable by the User for any loss of profits, business, goodwill, use, data or other intangible and tangible losses resulting from such server failure. </li>
                </ul>
                <h4 className={Styles.termsAndConditionSubTitle}>7. License Subscription Fees </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>7.1. The Company has several pricing options and subscription levels depending on the User’s requirements. The User shall select a subscription level based on their needs and Grafterr shall generate a “Quotation” in writing to the User’s
                    email address as specified on their account information. By using the Software, the User accepts the terms of the Quotation and this Agreement.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.2. All ePOS hardware purchased via our website directly shall automatically qualify for an “ePOS Freemium” license subscription to our Cloud Software.  </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.2.1. Once the User has completed the full payment and registration process, the User shall receive full access to the User’s online customer account where, under the Subscription tab, they can view and select the “ePOS Freemium” subscription option and/or compare all other license subscription levels and upgrade to a subscription level based on their needs. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.2.2. No payment card details will be necessary to start using our “ePOS Freemium” subscription as there is no monthly/annual cost associated with this subscription level. All other subscription levels require the User to input their card details and initiate payments via Direct Debit or credit/debit card recurring.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.2.3. The “ePOS Freemium” subscription has specific limitations on functionality, orders processed and number of POS terminals. By using the Software, the User accepts the terms and limitations of the “ePOS Freemium” subscription level and this Agreement.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.2.4. Users with non-Grafterr hardware, who download the Software application via the Google Play Store, shall receive “ePOS Freemium” subscription automatically. We recommend researching all subscription levels and pricing options on our website before downloading the application. The User can change their subscription level via the Subscription tab on their online customer account.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.3. Alternatively, Users can request a quotation via the website and a member of our dedicated Grafterr Product Gurus shall be in contact to discuss and generate a “Quotation” in writing to the User’s email address as specified on their account information. Users who have gone through the quotation process will receive a specific license subscription package, based on the discussion with our Product Gurus, and will not receive access to “ePOS Freemium”. By using the Software, the User accepts the terms of the Quotation and this Agreement. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.4. The User shall pay the selected monthly/annual subscription fee, if any, for the Software provided by Grafterr on the same date of each calendar month/year, unless cancelled as per the Cancellation Policy in Section 20.  </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.5. Based on the User’s current license subscription level and cost, the subscription will be renewed monthly/annually via Direct Debit or credit/debit card recurring. There are no other payment options available. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.6. If the User’s payment fails and no payment is done within seven (7) days of initial payment failure, the license subscription will be cancelled, and data associated with it will be deleted permanently from the Cloud after thirty (30) days of the initial payment failure. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.7. Should the User run out of Cloud data storage, the User can either upgrade their license subscription or download all/some data onto a secure device and delete it from their Cloud. The User acknowledges and accepts that any deleted data from their Cloud cannot be retrieved.
                </p>
                
                <p className={Styles.termsAndConditionSubParagraph}>7.8. The User may Upgrade or Downgrade their subscription at any time via the Subscription tab on their online customer account. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.8.1. Annual subscriptions may be upgraded or downgraded by giving us one calendar month notice. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.8.2. If downgrading an annual subscription, a refund shall be issued for the monetary difference in subscription levels within twenty-eight (28) days of receiving the request to downgrade and functionality changes shall be processed upon expiration of the month notice. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.8.3. If upgrading an annual subscription, any monetary difference in subscription levels can be paid via credit/debit card immediately and functionality changes will become active within twenty-four (24) hours. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.8.4. Grafterr shall endeavour to process monthly subscription changes from the following billing date proving we have received at least three (3) working days’ notice. No refunds are available for downgrading a monthly subscription. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.8.5. Downgrade option is not applicable if the User has subscribed to the lowest subscription level provided by Grafterr.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.8.6. Once downgraded or upgraded, the monthly/annual payment will be adjusted, and Direct Debit changed accordingly, from the next billing date. Any subscription changes made within three (3) working days of the next billing date, shall be reflected from the billing date after next. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.9. The fees charged by the Company for use of the Software and/or Hardware are subject to change. The Company reserves the right to increase the subscription fee every year after the first twelve (12) months of the subscription by either 5% of the current subscription charges, or as per the inflation rate recognised by the UK Office of National Statistics, whichever is greater.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.9.1. The Company will endeavour to notify the User at least 30 days prior to increasing the subscription fees. </p>
                <p className={Styles.termsAndConditionSubParagraph}>7.9.2. The User’s continued use of the Software will be deemed acceptance of the renewed terms of payment.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.9.3. The User reserves the right to cancel their subscription, should the increased subscription cost be outside the User’s financial abilities. The User needs to exercise this right as per the process outlined in Section 20. Should the User wish to re-subscribe after their subscription has been cancelled, a new Quotation and Terms shall be generated.</p>
                <p className={Styles.termsAndConditionSubParagraph}>7.10. All prices are listed and charged to the User’s bank account in GBP (£). Any charges for transactions in foreign currency, other than GBP (£), shall be payable by the User.</p>
               <p className={Styles.termsAndConditionSubParagraph}>7.11. All invoices for monthly/annual payments and/or individual purchases shall be available for the User to view via their online customer account. The Company shall not be emailing invoices for individual payments.</p>
               <p className={Styles.termsAndConditionSubParagraph}>7.12. This Section 7 is not applicable to Users with a Quotation for a “Free Subscription” (please refer to Section 8).</p>


                <h4 className={Styles.termsAndConditionSubTitle}>8. Free Subscription for Charities and Non-profit Organisations </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>8.1. Non-profit organisations may apply in writing, via email or post, to Grafterr to receive a license to access our Cloud Software services free of charge for an extended period of time, up to a maximum of three (3) calendar years.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>8.2. The User understands and agrees that the Company in its sole discretion reserves the right to accept or reject any applications for “Free Subscription”, in whole or in part, notwithstanding prior receipt by the User of notice of acceptance
                    of this subscription. The Company shall have no obligation hereunder until the Company shall execute and deliver to the User an applicable Quotation and an executed copy of this Agreement. If this subscription is rejected in whole,
                    or the offering of “Free Subscription” is terminated by the Company for any reason, the User reserves the right to opt in for a paid license subscription as per Section 7. </p>
                <p className={Styles.termsAndConditionSubParagraph}>8.3. Should the User run out of Cloud data storage, the User can either upgrade their license subscription or download some/all data onto a secure device and delete it from their Cloud. The User acknowledges and accepts that any deleted
                    data from their Cloud cannot be retrieved. For any request to upgrade a “Free Subscription”, the Company may request the User to contribute towards the cost of the upgrade. Any such request shall be made by the Company in its sole
                    discretion and a Quotation shall be provided to the User. The User reserves the right to withdraw an upgrade request should the additional cost be a financially unfeasible expense to the User, in which case, the User shall need to
                    download some/all data onto a secure device and delete it from their Cloud to free-up storage. </p>
                <p className={Styles.termsAndConditionSubParagraph}>8.4. Should a ‘Free Subscription’ last the maximum of three (3) calendar years, a new application will need to be submitted for review by Grafterr as per the criteria set out in Section 8.2. </p>
                <p className={Styles.termsAndConditionSubParagraph}>8.5. Grafterr reserves the right to cancel the User’s ‘Free Subscription’ by giving thirty (30) days written notice, should this Quotation become financially unfeasible for Grafterr to support.
                </p>

                <h4 className={Styles.termsAndConditionSubTitle}>9. Web Ordering Services </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>9.1. Grafterr provides a web ordering system through an iFrame which comes with a URL and it cannot be changed. </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.2. Where the User already has their own existing website, the User shall incorporate the iFrame into their business website. </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.3. Should the User not have a website, as a matter of gesture, Grafterr could provide ‘Pre-build’ free website templates for the User to choose from for their business purposes. Grafterr does not guarantee that we can provide a
                    range of templates to choose from, nor that the templates shall meet the User’s needs and expectations for their website. The Company cannot make any customisations to the website templates. The User is not obliged to use our website
                    templates.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.4. Where the User has their own existing website, domain and/or hosting, the User shall make necessary updates including, but not limited to, iFrame integration, domain settings, record updates and/or any other hosting setting required
                    to make our web ordering system live and functioning. Grafterr shall endeavour to assist the User with determining what updates may be necessary, but we are not obliged to provide any advice and/or technical assistance with any
                    such updates, nor will we carry out any necessary updates on behalf of the User to their website, domain and/or hosting. It is the User’s responsibility to ensure all necessary updates are carried out fully and successfully to allow
                    proper functioning of our web ordering system. As per GDPR regulations, Grafterr will not be able to access the User’s own website, domain and/or hosting control panels. </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.5. Where the User does not already have any domain and hosting, Grafterr could provide a free domain, subjected to name availability, and provide free domain hosting at our servers. The User has an obligation to provide necessary
                    information such as, but not limited to, business description, contact details, terms &amp; conditions, refund policy and privacy policy, and keep this information accurate, current and complete. </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.6. If the User opts in to using one of our pre-build website templates hosted in our servers, upon request, Grafterr shall provide the User direct access to the website hosting control panel. Any necessary amendments to the website
                    content, design, images and graphics shall be done by the User. </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.7. Grafterr web ordering platform designs are pre-built and we do not make any customisations.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>9.8. This Section 9 is applicable to Users with a Quotation for a subscription to our Web Ordering software services. </p>

                <h4 className={Styles.termsAndConditionSubTitle}>10. Mobile Apps Ordering Services </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>10.1. Grafterr provides mobile apps for Google Play Store and Apple Store suitable for mobile devices only. These mobile apps are with “Pre-built” designs and we do not make any customisations.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>10.2. If the User wishes to submit an app(s) to publish via their own Google and Apple accounts, the User is free to do so themselves. As per GDPR regulations, Grafterr will not be able to access the User’s own mobile apps control panels.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>10.3. If the User does not have their own Google and/or Apple accounts or does not wish to use their own Google and/or Apple accounts, the User may opt in to submit the app(s) for publishing to Google Play Store and/or Apple Store via
                    iHybrid Limited’s business account. If the User opts in to submit the app(s) to Google Play Store and/or Apple Store via iHybrid Limited’s business account, the User has an obligation to provide necessary information such as, but not
                    limited to, business description, app description, terms &amp; conditions, refund policy and privacy policy, and keep this information accurate, current and complete. </p>
                <p className={Styles.termsAndConditionSubParagraph}>10.4. iHybrid Limited does not have any control over the app approval process. Google Play Store and Apple Store approve app submissions under their sole discretion. They may change their policies without any prior notice to anyone and
                    may reject app submissions for any reason. If a submission is rejected, the User shall provide necessary information and evidence as requested by Google Play Store and/or Apple Store to resubmit the app(s). </p>
                <p className={Styles.termsAndConditionSubParagraph}>10.5. Google Play Store and Apple Store usually take up to seven (7) business days to approve apps. These timelines can change at any time and iHybrid Limited does not have any control over these timelines. </p>
                <p className={Styles.termsAndConditionSubParagraph}>10.6. Any necessary amendments to the mobile app(s) content, design, images and graphics shall be done by the User. </p>
                <p className={Styles.termsAndConditionSubParagraph}>10.7. This Section 10 is applicable to Users with a Quotation for a subscription to our Mobile Apps Ordering software services. </p>


                <h4 className={Styles.termsAndConditionSubTitle}>11. QR Code Ordering Services</h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>11.1. Grafterr provides QR Code ordering platform which comes with a URL and this URL cannot be changed. </p>
                <p className={Styles.termsAndConditionSubParagraph}>11.2. Our QR Code platform designs are “Pre-built” and we do not make any customisations.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>11.3. The User has an obligation to provide necessary information such as, but not limited to, terms &amp; conditions, refund policy and privacy policy, and keep this information accurate, current and complete, in order for Grafterr to
                    be able to develop a QR Code for ordering.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>11.4. Any necessary amendments to the QR Code content, design, images and graphics shall be done by the User.</p>
                <p className={Styles.termsAndConditionSubParagraph}>11.5. Grafterr shall provide a QR Code in JPEG or PNG format which will be sent through email. The User shall print their own stationery and/or marketing materials to advertise the QR Code ordering system. Grafterr shall not be providing
                    the User any stationery and/or marketing materials to advertise the QR Code ordering system at any time. </p>
                <p className={Styles.termsAndConditionSubParagraph}>11.6. This Section 11 is applicable to Users with a Quotation for a subscription to our QR Code Ordering software services. </p>

                <h4 className={Styles.termsAndConditionSubTitle}>12. Platform Fees Model </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>12.1. The Platform Fees Model helps Users by passing the cost of maintaining web, mobile and QR ordering technologies to the End User.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>12.2. The Platform Fees Model is applicable to Users who have signed up for a subscription to at least one of the following Services: Web Ordering, Mobile Apps Ordering and/or QR Code Ordering. The Platform Fees Model requires the User
                    to integrate Grafterr Payments powered by Stripe as their Payment Service Provider. This Model is not available with any other payment service provider. </p>
                <p className={Styles.termsAndConditionSubParagraph}>12.3. A Platform Fee shall be charged to the End User per transaction via the Platform based on transaction value “Slabs”. The Platform Fee shall be paid directly to Grafterr at the settlement of each transaction. The below indicative
                    Platform Fee Slabs and Platform Fee associated with each Slab shall not be changed for the first calendar year of this Agreement: </p>
                <ul >
                    <li className={Styles.termsAndConditionSubParagraph}>1. Transactions up to £20.00 – £0.19 </li>
                    <li className={Styles.termsAndConditionSubParagraph}>2. £20.01 to £30.00 – £0.29 </li>
                    <li className={Styles.termsAndConditionSubParagraph}>3. £30.01 to £40.00 – £0.39 </li>
                    <li className={Styles.termsAndConditionSubParagraph}>4. £40.01 to £50.00 - £0.49 </li>
                    <li className={Styles.termsAndConditionSubParagraph}>5. £50.01+ – £0.59 </li>
                </ul>

                <p className={Styles.termsAndConditionSubParagraph}>12.4. After the first calendar year of this Agreement, the Platform Fee Slabs and Platform Fee associated with each Slab shall be reviewed and increased/decreased/amended at the Company’s sole discretion. Grafterr shall not be seeking
                    permission, consulting, or notifying the User about any amendments to the Platform Fees or Platform Fee Slabs as the Platform Fee is paid by the End User. </p>
                <p className={Styles.termsAndConditionSubParagraph}>12.5. The Platform Fee shall have VAT included in it, even if the User is not VAT registered. If an End User requiresa VAT receipt for the full value of their order, the End User should contact the User for a receipt detailing the order
                    and delivery fees, and contact separately ePOSHybrid in writing to <a href="mailto:accounts@eposhybrid.com">accounts@eposhybrid.com </a> with their request for a receipt detailing the Platform Fee. ePOSHybrid shall endeavour to provide
                    a VAT invoice within seven (7)business days. </p>
                <p className={Styles.termsAndConditionSubParagraph}>12.6. The User may request Grafterr to provide them with data relating to Platform Fees charged. Grafterr is under no obligation to provide any such information, but if we do provide any information, it shall be accumulative data
                    for a given period of time. Should Grafterr agree to provide such data, the Company shall endeavour to complete the request within twenty-eight (28) calendar days. </p>



                <h4 className={Styles.termsAndConditionSubTitle}>13. Grafterr Payments Powered by Stripe </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>13.1. Grafterr has partnered with Stripe to provide a Payment Processing service. This section is only applicable to the Users who signed up for this payment processing.</p>
                <p className={Styles.termsAndConditionSubParagraph}>13.2. The User shall be charged by Grafterr a Merchant Fee per payment processed via the Platform based on a pre-agreed fixed percentage. The Merchant Fee percentages payable to Grafterr and the money settlement frequency shall be
                    communicated to the User during the sales/registration process or the Quotation process. </p>
                <p className={Styles.termsAndConditionSubParagraph}>13.3. It should be noted that Grafterr is not a Payment Service Provider, and is not regulated by FCA and FSA, rather merely an integrator of Stripe payment processing tools. </p>
                <p className={Styles.termsAndConditionSubParagraph}>13.4. Grafterr shall provide the User with a “Payment Dashboard” with minimum transaction information for easy navigation and visibility of payments processed. Should the User wish to access full reporting on paymentsand further payment
                    information, the User should log into their Stripe Merchant Account directly at<a href="https://stripe.com/gb"> https://stripe.com/gb . </a></p>
                <p className={Styles.termsAndConditionSubParagraph}>13.5. Each transaction will be settled directly into the User’s Stripe Merchant Account after deducting any Merchant Fees and any Platform Fees. Grafterr does not have access to the funds in the User’s Stripe Merchant Account.</p>
                <p className={Styles.termsAndConditionSubParagraph}>13.6. The User may choose to refund a transaction(s) after processing the payment. Regardless of whether a payment is refunded, the User is still required to pay the full Merchant Fees for the refunded transactions. Merchant fees are non-refundable
                    in any circumstances. </p>
                <p className={Styles.termsAndConditionSubParagraph}>13.7. The User may be required to pass any Anti-Money Laundering checks at any time, irrespective of which payment service provider they choose. The User shall always comply with all Anti-Money Laundering statute and legislation. Any non-compliance
                    shall constitute a breach of this Agreement and the possibility for immediate termination of this Agreement as per Section 28.4.6.</p>
                <p className={Styles.termsAndConditionSubParagraph}>13.8. Payment Processing can only be activated when the User enters their login credentials (merchant key) onto the POS terminal and/or Grafterr Admin control panel. </p>
                <p className={Styles.termsAndConditionSubParagraph}>13.9. Grafterr is not responsible for any issues with the payment gateway, including, but not limited to, fraudulent transactions and bank charge backs. The Grafterr Technical Support team can only assist with first line technical
                    support and login issues, and any unresolved issues shall be passed on to Stripe. Any payment processing issues, including, but not limited to, fraudulent transactions and bank chargebacks shall be addressed to Stripe directly. </p>
                <p className={Styles.termsAndConditionSubParagraph}>13.10. It is the User’s responsibility to familiarise themselves with all Stripe processes and fees associated with disputes and fraud, as well as best practises and guidance around identifying potential fraud. Further information, provided
                    by Stripe, can be found at<a href="https://stripe.com/docs/disputes#managing-and-preventing-disputes ">https://stripe.com/docs/disputes#managing-and-preventing-disputes </a>
                </p>
                <div >
                    <p className={Styles.termsAndConditionSubParagraph}>13.10.1. A dispute (also known as a chargeback, inquiry, or retrieval) occurs when a cardholder questions a payment with their card issuer. An inquiry or retrieval is a request for more information about the charge, which may escalate
                        to a chargeback. To avoid an inquiry or retrieval becoming a chargeback, submit any required evidence or refund the payment in full. Refunding the payment marks the inquiry or retrieval as resolved and does not incur a dispute
                        fee. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>13.10.2. To process a chargeback, the card issuer creates a formal dispute, which immediately reverses the payment. The payment amount, along with a separate £15.00 dispute fee, is then deducted from the Merchant’s account balance.
                        The dispute fee amount is subject to change as per Stripe’s discretion. Grafterr is not responsible for communicating any changes to the dispute fee amount to the User. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>13.10.3. The User has full responsibility and/or liability for all payment disputes. The User shall deal with payment disputes through their Payment Dashboard by providing necessary evidence. In most cases, Stripe does not decide the
                        outcome of the dispute. Stripe conveys your evidence to their financial partners. Stripe’s financial partners then pass your evidence to the card issuers, if they deem it sufficient. If you do not submit evidence by the time the
                        deadline passes, the cardholder wins the dispute and keeps the funds.</p>
                    <p className={Styles.termsAndConditionSubParagraph}>13.10.4. All costs incurred during the dispute resolution process shall be covered by the User. The User shall keep the Company indemnified against any payment disputes and costs incurred by dispute settlement. The User acknowledges
                        and agrees that using any form of Payment Processing is at the User’s own risk. </p>
                        <p className={Styles.termsAndConditionSubParagraph}>13.11. In the event that Grafterr’s partnership with Stripe is terminated, the User shall need to switch to another integrated provider to continue using Grafterr Payments for online ordering, and/or contactless table ordering, and/or self-checkout ordering, etc. The Company shall inform the User in advance of any such termination in partnership and provide details of any new third-party payment service provider that will replace Stripe’s functionalities. The User shall have the opportunity to review any new terms and conditions deriving from the new partnership and choose to switch to the new payment service provider, or a different third-party payment service provider (please see Section 14), or cancel any Grafterr services altogether (please see Section 20). The Company shall endeavour to make the transition period and process as smooth as possible for the User and their customers. 
                    </p>
                </div>

                <h4 className={Styles.termsAndConditionSubTitle}>14. Grafterr Payments with Other Third-Party Payment Service Providers </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>14.1. The Company’s Software supports Payment Processing with certain third-party partners (payment service providers) approved by Grafterr, including WorldPay, EVO, PaymentSense, and Sumup. It should be noted that Grafterr is not
                    a Payment Service Provider, and is not regulated by FCA and FSA, rather merely an integrator of payment processing tools. The User acknowledges and agrees that using any form of Payment Processing is at the User’s own risk. </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.2. Should the User wish to use online ordering, and/or contactless table ordering, and/or self-checkout ordering systems provided by Grafterr, the User must choose one payment service provider from the list of Grafterr approved
                    partners. The User should take into consideration the cost, flexibility, and speed offered by each payment service provider before deciding which payment service provider will be best suited to the User’s business. Unless otherwise
                    stated in the Quotation, or any other documents in the Appendix of this Agreement, the Company shall not be guiding the User in the selection process. The User can request the Company to provide a list of all integrated payment service
                    providers at any time. </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.3. Company payment processing partners may change from time to time or withdraw integration with or without prior notice. In such cases, the customer shall need to switch to another integrated provider to continue using Grafterr
                    Payments for online ordering, and/or contactless table ordering, and/or self-checkout ordering, etc. </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.4. Payment Processing can only be activated when the User enters their login credentials (merchant key) onto the POS terminal. </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.5. Grafterr is not responsible for any issues with the payment gateway, including, but not limited to, fraudulent transactions and bank charge backs. The Grafterr Technical Support team cannot assist with any payment processing
                    issues, including, but not limited to, fraudulent transactions, bank charge backs and login issues. The User shall direct such issues to their bank/merchant account provider. </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.6. The User may be required to pass any Anti-Money Laundering checks at any time, irrespective of which payment service provider they choose. The User shall always comply with all Anti-Money Laundering statute and legislation. Any non-compliance
                    shall constitute a breach of this Agreement and the possibility for immediate termination of this Agreement as per Section 28.4.6. </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.7. Other than as specified in Section 14.2, should the User work with a Payment Service Provider not integrated into the Company’s ePOS Software, the User shall need to manually enter all payment details onto the merchant card terminal.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>14.8. This Section 14 is only applicable to Users who have opted for Grafterr Payments processed by a third-party partner other than Stripe. </p>

                <h4 className={Styles.termsAndConditionSubTitle}>15. Customer Support Services</h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>15.1. All queries, requests and/or issues shall be directed to the Company Customer Support Team for review. The Customer Support Team, which includes the Technical Support Team, is operational on a 24/7 basis. In the event of any unforeseen
                    disruption to the telephone and/or Internet connection with the Customer Support Team, the operation times may be reduced. The Company shall endeavour to minimise the effect of any such disruption onto the Customer Support Team operations.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>15.2. The Company uses an internal ticketing system across all support channels. All data collected via the ticketing system shall only be used for ticket prioritisation and producing reports for internal management and improvements. Any
                    data used for internal reports shall be anonymised first. No data shall be distributed to any third party without prior consent from the User. </p>
                <p className={Styles.termsAndConditionSubParagraph}>15.3. The customer support channels available to the User shall be dependent upon the User’s subscription level and detailed within the Quotation. In the unlikely event that a particular support channel experiences technical difficulties
                    and becomes temporary unavailable, the User shall attempt to contact the Customer Support Team via a different support channel.</p>

                <p className={Styles.termsAndConditionSubParagraph}>15.4. The User shall receive technical support in case of any issues with the Company’s software and or hardware within 24 hours of sending a request through telephone or email at
                    <a href="mailto:support@eposhybrid.com"> support@eposhybrid.com.</a> For more complex issues, the request will be passed to our second line support team for resolution within 72 hours of the initial User’s request. In the unlikely
                    event that the Technical Support Team encounters a new issue not dealt with before, the Company shall endeavour to keep the User informed on the expected timeframe for resolution and keep any disruption to the Services functionality
                    to a minimum.</p>
                <p className={Styles.termsAndConditionSubParagraph}>15.5. Telephone technical support (+44 131 564 1559) is available to the User free of charge for the first three (3) months of their license subscription. Should the User require telephone technical support for longer that the first three
                    (3) months of their license subscription, this shall be charged as an additional cost to the User’s monthly/annual subscription OR shall be included in the Quotation. </p>
                <p className={Styles.termsAndConditionSubParagraph}>15.6. Remote training on the use of the Cloud services can be provided upon request by the User, depending on reasonable timeframes and availability of Company engineers. Repeat training may be charged at an additional cost to the User.
                    Any such cost and payment process shall be communicated to the User in advance. </p>
                <p className={Styles.termsAndConditionSubParagraph}>15.7. The Company does not offer on-site visits to the User’s locations as part of our technical support services. All technical support provided by the Company is on a remote basis only. </p>
                
                <div >
                    <p className={Styles.termsAndConditionSubParagraph}>15.7.1. The User shall be required to assist with troubleshooting any technical issues while being guided by an engineer remotely.&nbsp; </p>
                    <p className={Styles.termsAndConditionSubParagraph}>15.7.2. Should any troubleshooting require additional time for resolving, the User shall be given the option to proceed with the troubleshooting at a time more convenient to the User.&nbsp; </p>
                    <p className={Styles.termsAndConditionSubParagraph}>15.7.3. Should the User be required to provide remote access to their devise(s) and/or screen share with a technical support engineer, the User shall be responsible for ensuring all sensitive data is closed on their devise before remote
                        access and/or screen share begins. </p>
                </div>
                <p className={Styles.termsAndConditionSubParagraph}>15.8. The Company Customer Support Team is currently based in India. This location is subject to change based on the Company’s sole discretion. Grafterr shall review the Customer Support Team’s location as deemed needed by the Company.
                    The Company shall not be required to obtain the User’s consent should the Company decide to move the Customer Support Team to a new location. </p>


                <h4 className={Styles.termsAndConditionSubTitle}>16. Third-Party Licensing, Tools, and Integrations </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>16.1. The Software is developed in Android, PHP, Python, Flutters, Angular, HTML, MySQL, JavaScript, eJabber, CSS and a number of other software tools. These are currently license-free, therefore, no software license is required for the
                    users. If any third-party software used becomes paid, the User shall subscribe to it or pay additional fees to the Company to cover the necessary license fees.
                </p>
                <p className={Styles.termsAndConditionSubParagraph}>16.2. The Company has integrated Google Maps API to find addresses with a postcode. These address lookups are useful while taking orders, registering customers, loyalty management etc. The Company has no control over these records, therefore
                    it does not hold any responsibility or liability for the accuracy of such records. The Company shall provide the User with one thousand (1,000) address lookups free of charge every month. Any additional address lookups shall be charged
                    at an additional rate, as specified in the Quotation, and added onto the following month’s subscription charges. </p>
                <p className={Styles.termsAndConditionSubParagraph}>16.3. To enhance the Software usage, the company has integrated third-party tools such as, but not limited to, Deliveroo, Deliverect, MailChimp, Message Bird, SendGrid, Twilio, Xero and many other. If the User wants to use the services
                    from any integrated third-party tools, they must subscribe to services directly from the provider. The Company does not hold any responsibility for pricing, tool-performance and disputes related to third-party tools. Should the User
                    already have a subscription with any of the integrated third-party tools, the User may sync their third part account with the Software. </p>
                <p className={Styles.termsAndConditionSubParagraph}>16.4. Third-party tools and/or integrations may change with or without prior notice to Grafterr and/or the User. The Company shall not be held liable by the User for any loss of profits, business, goodwill, use, data or other intangible
                    and tangible losses resulting from the withdrawal of any third-party tools and/or integrations with or without prior notice. </p>
                <p className={Styles.termsAndConditionSubParagraph}>16.5. The User can request the Company to provide a list of all third-party tools and integrations at any time. </p>

                <h4 className={Styles.termsAndConditionSubTitle}>17. Hardware Refunds Policy </h4>
                <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                <p className={Styles.termsAndConditionSubParagraph}>17.1. Upon submitting your order details, you are making an offer to us to purchase the item(s) you have specified in your order form. We reserve the right to refuse your order should it be necessary. We will notify you if this is the
                    case and return any payment that you have made. </p>
                <p className={Styles.termsAndConditionSubParagraph}>17.2. You must notify us immediately if you decide to cancel your order, preferably by phone, and quote your order number.</p>
                <div >
                    <p className={Styles.termsAndConditionSubParagraph}>17.2.1. If no delivery has been dispatched yet, no cancellation fee applies, and you will be issued a full refund. If the order has been dispatched for delivery already, your delivery cancellation request will be refused, and you will
                        need to refer to the process detailed in Section 17.6. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>17.2.2. If the cancellation was made in time, and once we have accepted your delivery cancellation request, we will refund or re-credit your payment card with the full amount within fourteen (14) days, which includes the initial delivery
                        charge (where applicable). </p>
                </div>
                <p className={Styles.termsAndConditionSubParagraph}>17.3. If we can only do a split delivery (not all items from the order are available at the same time), our staff shall inform you of the expected date for delivery of the missing items. You have the right to refuse a split delivery before
                    the order is dispatched and wait for all items to become available at the same time, or request to cancel your order and get a refund. </p>
                <p className={Styles.termsAndConditionSubParagraph}>17.4. In the unlikely event that we deliver a wrong item of hardware, you have the right to either reject the delivery of the wrong item and you shall be fully refunded for the missing item; or request for us to replace the incorrect item
                    with the item that you ordered, in which case, we shall send you the correct one as soon as possible. </p>
                <p className={Styles.termsAndConditionSubParagraph}>17.5. Should any items arrive damaged in transit, the User needs to report this to Grafterr within seven (7) working days of delivery. If the packaging is visibly damaged when received, the User is required to bring this to the attention of the delivery driver who may be able to record this on their system. Should any damaged items need to be replaced, the User shall make them available for collection with original packaging including all accessories and documentation. Grafterr shall arrange the collection and process a replacement delivery.
                    </p><p className={Styles.termsAndConditionSubParagraph}>17.6. Under the definitions given in the Consumer Rights Act 2015, and the terms of Section 1.6, the User is not classed as a “consumer” and no consumer statutory rights are applicable to this Agreement. However, as a gesture of goodwill, Grafterr operates a “7 Days Money Back Guarantee” policy for purchases of Hardware items. </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>17.6.1. Should you change your mind and wish to return your Hardware order, the Company shall issue a full refund for any undamaged items returned within seven (7) days of delivery, minus any delivery charges for delivery and/or returns. The item(s) returned must be unused, still in their original packaging, including all accessories and documentation, and must be in “as new” and resalable condition.</p>
                        <p className={Styles.termsAndConditionSubParagraph}>17.6.2. The Company reserves the right to refuse a full or partial refund if:</p>
                        <div >
                            <p className={Styles.termsAndConditionSubParagraph}>any item is not returned in its original packaging; or </p>
                            <p className={Styles.termsAndConditionSubParagraph}>any item is missing any accessories and documentation; or </p>
                            <p className={Styles.termsAndConditionSubParagraph}>the goods are in a damaged condition (any damaged equipment will be charged at full cost); or</p>
                            <p className={Styles.termsAndConditionSubParagraph}>
                            </p><p className={Styles.termsAndConditionSubParagraph}>the goods are not returned within seven (7) days of delivery.</p>

                        </div>
                        <p className={Styles.termsAndConditionSubParagraph}>17.6.3. Should you wish to return your goods to us, you will be responsible for the delivery costs associated with the return. Grafterr can organise a collection on your behalf, but the associated costs will be deducted from your total refund amount.</p>
                    </div>
                    <p className={Styles.termsAndConditionSubParagraph}>17.7. For any other formal complaint with a genuine reason, you have seven (7) days from the day of delivery to request a refund, subject to our discretion and acceptance of the complaint.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>17.8. In the event of a return, any relevant refunds, credit notes or exchanges can only be made to the payment card account or the business/person that made the order originally. Debit/credit card payment refunds can take up to twenty-eight
                        (28) days to process, even if you contact us immediately after placing your order to cancel. This processing time is beyond our control and we apologise for the inconvenience caused.</p>
                    <p className={Styles.termsAndConditionSubParagraph}>17.9. Any amounts paid for onsite installations, product imports, support payments, postage, module integrations, repair and labour costs are non-refundable. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>17.10. All costs with respect to Software sales and license subscriptions are excluded from the standard returns policy due to the considerable costs in configuration, personalization, training, and installation. These items are strictly
                        non-refundable.
                    </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>18. Hardware Warranty Returns Process</h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.1. The User reserves the right to request a warranty return, by contacting the Customer Support Team, should the User feel the equipment provided by Grafterr is ‘not fit for purpose' within the one (1) year basic manufacturer’s
                        warranty.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.2. The Company shall endeavour to obtain proper reasons as to why the User feels the product is ‘not fit for purpose' and attempt to reasonably resolve any issues upon remote troubleshooting.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.3. Should the issues not be resolved remotely, the Company shall request for the User to send, via a courier service, the faulty hardware to a nominated address for repair. The User shall pack the hardware in appropriate packaging
                        to avoid any damage in transit. The Company reserves the right to charge the User for any damage caused in transit due to poor packaging. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.4. Once the hardware is repaired, the Company shall post the repaired hardware back to the User. Should the fault be non-repairable, the Company shall send the User a replacement of the faulty hardware. Any replacement hardware
                        may be a refurbished item. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.5. If the item returned is found to be in a working condition but in a poor and unreasonable state of cleanliness, the User will be billed for cleaning at a fixed rate of £50per item.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.6. Warranty refunds may only be offered by the Company after all endeavours have been made by the Company to resolve any arising issue/fault and no reasonable replacement equipment is available. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.7. The company cannot process a warranty refund of hardware due to any of the following reasons: </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.1. The User or staff not understanding or using the system properly; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.2. Lack of compatibility with third-party items/systems; or</p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.3. The equipment has been configured, personalized and/or used; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.4. The product is a surplus to the User’s requirements; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.5. Operational problems arising from the User’s unstable or insufficient internet connection; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.6. The User has accidentally damaged the item after delivery; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.7. The User has misused the item and damaged it; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.8. The User has tried to open or tamper with the hardware in any way; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.9. Any environmental problems that are out of the Company’s control; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>18.7.10. The User’s business goes bankrupt. </p>
                    </div>
                    <p className={Styles.termsAndConditionSubParagraph}>18.8. The Company does not offer on-site visits to the User’s location as part of our warranty repair process. All technical support provided by the Company is on a remote basis. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>18.9. Hardware repairs outside the one (1) year basic manufacturer’s warranty could be carried out at an additional cost to the User. Any such cost shall be agreed by the Company and the User, prior to any work being carried out. </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>19. Formal Complaints Procedure </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>19.1. Grafterr is committed to providing a quality service for its customers and operating in an open, accountable, and respectful way. If you are unsatisfied with any part of our service, please contact us immediately via telephone
                        or email. The Company shall endeavour to resolve any issues within reasonable time. The Company shall use the following Complaints Procedure with regards to any issues not related to hardware malfunctioning: </p>
                    <p className={Styles.termsAndConditionSubParagraph}>19.1.1. Stage 1 - If you are unable to resolve an issue informally, you should contact us directly in writing via email or post and give us a chance to put things right. In your contact email/letter to us, you should set out the details
                        of your complaint, the resulting consequences you have faced, and the remedy that you seek. You can expect your complaint to be acknowledged within five (5) business days of receipt and you should get an official response within
                        twenty (20) business days. Our contact details can be found on the ‘Contact Us’ part of our Grafterr Website -
                        <a href="https://www.eposhybrid.com/contact-us">     https://www.eposhybrid.com/contact-us </a> </p>
                    <p className={Styles.termsAndConditionSubParagraph}>19.1.2. Stage 2 - If you are not satisfied with the initial response to the complaint, then you can write to the Chief Executive Officer (CEO) via email or post and ask for a review of your complaint and response received. You can
                        expect the CEO to acknowledge your request within five (5) business days of receipt and a response within twenty (20) business days. Grafterr aims to resolve every issue as quickly as reasonable possible. However, certain issues
                        may be more complex and, therefore, may require more time for a thorough investigation. If an issue requires further investigation, you will receive details of what steps are being taken in investigating the complaint, in what
                        timescales an official response can be expected and from whom. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>19.1.3. Final Stage - If you are not satisfied with the subsequent reply and action taken by the CEO, then you have the option of writing to any of the following, depending on the nature of your complaint:</p>
                    <Link className={Styles.termsAndConditionSubParagraph} href="https://ico.org.uk/" target="blank">https://ico.org.uk </Link> <br/>
                    <Link className={Styles.termsAndConditionSubParagraph} href="https://www.hse.gov.uk/" target="blank">http://www.hse.gov.uk </Link> <br/>
                    <Link className={Styles.termsAndConditionSubParagraph} href="https://www.citizensadvice.org.uk/consumer/get-more-help/if-you-need-more-help-about-a-consumer-issue/" target="blank"><a style={{ wordWrap: "break-word"}}>
                      https://www.citizensadvice.org.uk/consumer/get-more-help/if-you-need-more-help-about-a-consumer-issue 
                    </a></Link>


                    <h4 className={Styles.termsAndConditionSubTitle}>20. Cancellation of License Subscription </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>20.1. The User may request to cancel their license subscription subject to a thirty (30) days’ notice to Grafterr by contacting the Customer Support Team via email or telephone. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>20.2. Should the User’s billing cycle fall during the thirty (30) days’ notice period, a full subscription shall be charged. Once the subscription is cancelled, a refund will be issued on a pro-rota basis for any period covered by
                        the subscription past the termination date. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>20.3. During the thirty (30) days’ notice of subscription cancellation, the User shall download all data stored on the Cloud Software for their account. After the license subscription is cancelled, all account data will be permanently
                        deleted. There is no possible way to retrieve deleted data. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>20.4. The User reserves the right to withdraw their cancelation request within the thirty (30) days’ notice period and continue the licence subscription without any obstructions. </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>21. Tax Calculations </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>21.1. Grafterr calculates tax on each line which is sold in a transaction as a common practice in most software.</p>
                    <p className={Styles.termsAndConditionSubParagraph}>21.2. The User might see a difference in total tax when calculating tax based on single transaction vs total sales for a specific period. For example, if you consider an item sold at 25p with 20% tax, this will result in a tax of 4.16p
                        which is rounded to 4p per transaction. If this item is sold separately 100 times, then the accrued tax will be £4.00. However, if you calculate this as 20% of the total100 items, you will get £4.16 tax. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>21.3. Discounts applied to tax on a transaction are taken equally from all items in the transaction (pro-rota). </p>
                    <p className={Styles.termsAndConditionSubParagraph}>21.4. Grafterr is not liable for any incorrect tax calculations. It is the User’s responsibility to take professional tax advice before submitting returns to tax and other governing authorities. </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>22. Company Income from Third-Party Referrals </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>22.1. The User acknowledges and accepts that the Company will be receiving financial incentives/commission from third-party providers such as leasing, finance, card processing, software tools, delivery partners, hardware tools and
                        other providers for referring the User. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>22.2. The Company shall not be notifying or disclosing to the User any such financial incentives/commission figures at any time. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>22.3. The User acknowledges and accepts that the Company reserves full rights on receiving and retaining such financial incentives. </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>23. Intellectual Property Rights</h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>23.1. The User acknowledges and agrees that iHybrid will hold all intellectual property rights in the software and hardware including, but not limited to, copyright and trademark rights.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>23.2. Under the terms of this license, the Company grants the User non-exclusive, non-transferable, and time-limited rights to use the software, interfaces, content, documentation, and any data, whether in read-only memory, on any
                        other media or in any other form. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>23.3. The User undertakes not to challenge or do anything inconsistent with such ownership.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>23.4. The User grants the Company, by using the software, a royalty-free, irrevocable, perpetual license to use information and/or data collected from the User’s activity on the Software, provided that the information or data is anonymised
                        before use. Other than this right, the Company claims no intellectual property rights in relation to the information or contents the User inputs into the Software. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>23.5. The User may provide the Company with feedback, alternative options, comments or suggestions on the Software, and the User agrees that the Company will be free to use, modify and incorporate such suggestions without any obligation
                        to the User. All intellectual property rights for such modifications remain with Grafterr. </p>

                    <p className={Styles.termsAndConditionSubParagraph}>23.6. The Company retains ownership of the software itself and reserves all rights not expressly granted to the User. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>23.7. The User is not permitted to assign, sub-license, and novate or transfer these Terms or any of the rights licensed to them. </p>



                    <h4 className={Styles.termsAndConditionSubTitle}>24. Unauthorised, Malicious and/or Illegal Use </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>24.1. The Company does not authorise the User to do any functionality changes or integrations into the Company Software without prior consent. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>24.2. The User must not: </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>24.2.1. Use the Software in any unlawful manner, for any unlawful or fraudulent purpose, or in any manner inconsistent with these Terms; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>24.2.2. Upload any malicious or unlawful content and/or data onto the Software; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}> 24.2.3. Infringe on the intellectual property rights, or those of any third party, in relation to their use of the Software; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>24.2.4. Tamper with or use the Software in a way that could damage, disable, overburden, impair or compromise the Company’s systems or security, or interfere with other users’ systems or security; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>24.2.5. Collect any information or data from the Software and/or Hardware or systems; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>24.2.6. Disclose or distribute information relating to another user of the Software to any third party; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>24.2.7. Use any other User's information for any marketing purposes unless they have obtained the User's express permission to do so; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}> 24.2.8. Access or register user logins via any automated methods. </p>

                    </div>

                    <h4 className={Styles.termsAndConditionSubTitle}>25. Limitation of Liability </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.1. Nothing in these Terms excludes or limits our liability for: </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>25.1.1. Death or personal injury caused by our negligence; and/or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>25.1.2. Fraud or fraudulent misrepresentation; and/or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>25.1.3. Any matter in respect of which it would be unlawful for us to exclude or restrict our liability. </p>
                    </div>
                    <p className={Styles.termsAndConditionSubParagraph}>25.2. Nothing in these terms and conditions will restrict any of your statutory rights. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.3. The Company shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, business, goodwill, use, data or other intangible and
                        tangible losses resulting from: </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}> 25.3.1. The use or the inability to use the Software, hardware (in whole or in part) or any technical malfunctions; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>25.3.2. The unauthorized access to, or alteration of, your communications or data; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>25.3.3. The cost of procurement of substitute goods and services; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>25.3.4. The conduct or actions of any third party regarding the Software; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>25.3.5. Any other matter relating to the Software. </p>
                    </div>
                    <p className={Styles.termsAndConditionSubParagraph}>25.4. The Company does not accept any liability for any delays, failures, errors or omissions or loss of transmitted information, viruses or other contamination or destructive properties transmitted to you or your computer system via
                        our Software. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.5. Force majeure: We will not be deemed to be in breach of contract or of these terms and conditions as a result of any delay in our performance or failure to perform our obligations if that delay or failure to perform is due to
                        any cause or circumstance beyond our reasonable control including, but not limited to, all overwhelming and unpreventable events caused directly and exclusively by forces of nature that can be neither anticipated, nor controlled,
                        nor prevented by the exercise of prudence, diligence, and care, including but not limited to: war, riot, civil commotion; compliance with any law or governmental order, rule, regulation or direction and acts of third parties.</p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.6. If we have contracted to provide orders to more than one customer and are prevented from fully meeting our obligations to you by reason of an event of Force Majeure, we may decide at our absolute discretion which orders we will
                        fill and to what extent. Nothing in these Terms obliges us to prioritise any order placed by the User in an event of Force Majeure.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.7. For the avoidance of doubt, nothing in Clause 22.5 shall excuse the Customer from any payment obligations under this agreement. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.8. The products sold by Grafterr are provided for commercial use only. Accordingly, we do not accept liability for any indirect loss, consequential loss, loss of data, loss of income or profit, loss of damage to property and/or
                        loss from claims of third parties arising out of the use of the Software and/or Hardware or for any products or services purchased from us. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.9. We have taken all reasonable steps to prevent Internet fraud and ensure any data collected from you is stored as securely and safely as possible. However, we cannot be held liable in the unlikely event of a breach in our secure
                        computer servers or those of third parties.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.10. No delay or failure on our part to enforce our rights or remedies under the Agreement shall constitute a waiver on our part of such rights or remedies unless such waiver is confirmed in writing. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.11. The User agrees to defend, indemnify and hold harmless Grafterr, its affiliates and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages,
                        obligations, losses, liabilities, costs or debt, and expenses (including but not limited to reasonable legal fees), resulting from or arising out of a) your use and access of the Services, b) any unauthorised use of your account
                        or password, or c) any other breach of the terms of this Agreement. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.12. In addition, you will indemnify us and our affiliates against any losses, damages, or claims (and all related costs including legal fees), penalties, fines, interest, expenses and other liabilities resulting from a third-party
                        claim against us or affiliate arising from this Agreement and relating to a violation or claimed violation of the third party’s intellectual property rights, where the loss, damages or claim arises from us or an affiliate, using
                        or permitting the use of, or being or having been the registered proprietor of a domain name, a brand name, trademark, logo or other intellectual property which the third-party claims violate its own rights, or where it is claimed
                        we or an affiliate have assisted or permitted you to use or to be a registered proprietor of such rights in violation of the third party’s own rights. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>25.13. Other than as set out above, the Company’s maximum aggregate liability arising out of any losses for paid license subscription users under or in connection with these Terms, is limited to the total amount of subscription fees
                        paid by the User in the previous twelve (12) months.
                    </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>26. Representation </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>26.1. The User has the due right and power to enter into this Agreement. Entering into this Agreement will not cause a breach of any agreement the User has with a third party. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>26.2. By assenting to this Agreement, the User represents and warrants that they have the full right, power and authority to access and use the Software and, to the extent necessary, that they have obtained all necessary corporate
                        or other authorizations or consents to access and use the Services. Thus, if you are an individual (e.g., employee or consultant) acting on behalf of an organization, you represent and warrant that you have obtained all necessary
                        authorizations or consents (i.e., you must be an authorized representative) to accept these Terms on behalf of such Organization so that, in addition to yourself, such Organization is bound by these Terms. </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>27. Severance</h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>27.1. If any part of these Terms and Conditions is found to be invalid by a court of Law, tribunal or another forum of competent jurisdiction, or otherwise rendered unenforceable, that decision shall not invalidate or void the other
                        parts of this agreement. An amendment of these Terms and Conditions shall be deemed to have been undertaken by any modification or severing parts of the Terms and Conditions as necessary to render them valid, legal and enforceable
                        while preserving their sole purpose. Or, if this is not possible, by substituting another provision that is valid, legal and enforceable that gives equivalent effect to the parties’ intent.
                    </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>28. Termination of Agreement </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>28.1. The Company may decide to cease providing all parts of the Software at any time, for any foreseen or unforeseen reasons, including, but not limited to, cessation of trading or bankruptcy. Nothing in these Terms is to be taken
                        as a guarantee that the Software will always be available, either in its current form or an updated version. </p>
                    <p className={Styles.termsAndConditionSubParagraph}>28.2. This Agreement may be terminated by either Party subject to a thirty (30) days’ written notice to the other Party via email. </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>28.2.1. Should the User’s billing cycle fall during the thirty (30) days’ notice period, a full subscription shall be charged. Once the subscription is terminated, a refund will be issued on a pro-rota basis for any period covered
                            by the subscription past the termination date.
                        </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.2.2. During the thirty (30) days’ notice of termination, the User shall download all data stored on the Cloud Software for their account. After the license subscription is cancelled and this Agreement terminated, all account
                            data will be permanently deleted. There is no possible way to retrieve deleted data.</p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.2.3. The User reserves the right to withdraw their termination request within the thirty (30) days’ notice period and continue the licence subscription without any obstructions.</p>

                    </div>
                    <p className={Styles.termsAndConditionSubParagraph}>28.3. Grafterr may decide to terminate this agreement with immediate effect, should the User or any of their employees and/or associates display any form of bullying, inappropriate, violent, aggressive, threatening, intimidating,
                        racist and/or otherwise disrespectful behaviour; and/or use any form of offensive, aggressive, threatening, racist and/or otherwise disrespectful language towards any employee or associate of Grafterr.</p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>28.3.1. In the event of a termination under this section 28.3, Grafterr shall provide the User with an immediate verbal or written notice, and written confirmation within twenty-four (24) hours via email. </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.3.2. Once the subscription is terminated, a refund will be issued on a pro-rota basis for any period covered by the subscription past the termination date.</p>

                    </div>
                    <p className={Styles.termsAndConditionSubParagraph}>28.4. Either Party (the “Terminating Party”) may terminate this Agreement immediately if:
                    </p>
                    <div >
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.1. The other Party files for bankruptcy, receivership, insolvency, reorganisation, dissolution, liquidation, or similar proceedings; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.2. The other Party had a bankruptcy, receivership, insolvency, reorganisation, dissolution, liquidation, or similar proceedings proceeding instituted against it and such proceeding is not dismissed within sixty (60) days;
                            or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.3. The other Party makes an assignment for the benefit of its creditors or an offer of settlement, extension or composition to its creditors or an offer of settlement, extension, or composition to its creditors generally;
                            or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.4. A trustee, conservator, receiver, or similar fiduciary is appointed for that party or substantially all of the other Party’s assets; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.5. The other Party commits any fraud or misrepresentation or engages in any act or omission that may damage the reputation, business, or goodwill of the Terminating Party; or
                        </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.6. The other Party is found to be involved of any form of child labour, modern slavery, human trafficking, forced and bonded labour and human rights violations, money laundering or terrorist activity; or </p>
                        <p className={Styles.termsAndConditionSubParagraph}>28.4.7. The other Party breaches any of the provisions of this Agreement. </p>
                    </div>
                    <h4 className={Styles.termsAndConditionSubTitle}>29. Law and Jurisdiction </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>29.1. Any dispute arising out of or in connection with this Agreement shall to the extent possible be settled amicably by negotiation between the Parties within thirty (30) days from the date of written notice by either party of the
                        existence of such a dispute. If the Parties do not reach settlement within a period of thirty (30) days, they will attempt to settle it by mediation before resorting to litigation. The parties shall attempt to agree upon the appointment
                        of a mediator, upon receipt, by either of them, of a written notice to concur in such appointment. Should the mediation fail, in whole or in part, either party may decide to take the dispute or claim to court for final decision.
                    </p>
                    <p className={Styles.termsAndConditionSubParagraph}>29.2. These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the
                        law of the England and Wales.

                    </p>

                    <h4 className={Styles.termsAndConditionSubTitle}>30. Entire Agreement </h4>
                    <p className={Styles.termsAndConditionSubParagraph} ><span ></span></p>
                    <p className={Styles.termsAndConditionSubParagraph}>30.1. This Agreement, together with any supporting documents added in the Appendix, constitute the entire Agreement between the Company and the User, and supersedes any prior written or oral agreement with respect to the subject matter
                        hereof.
                    </p>

            </div>
        
    
    </div>
  )
}

export default termsAndConditions