import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink px-6 py-20 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-widest">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="font-display font-bold text-4xl mb-4">Privacy Policy</h1>
      <p className="text-muted leading-relaxed mb-12">Last updated: June 2026</p>

      <p className="text-muted leading-relaxed mb-10">
        Xephral respects your privacy and is committed to protecting it through our compliance with this policy.
      </p>

      <Section title="WHAT IS COVERED BY THE POLICY?">
        <p>Our policy covers information that we collect on the Website and through any email, text or other electronic messages between you and the Website.</p>
      </Section>

      <Section title="WHAT INFORMATION DO WE COLLECT?">
        <p>We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, email address and telephone number ("personal information"); and about your internet connection, the equipment you use to access our Website and usage details.</p>
        <p>We collect this information directly from you when you provide it and automatically as you navigate through the Website. Automatically collected information may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</p>
      </Section>

      <Section title="ARE COOKIES OR OTHER TECHNOLOGIES USED TO COLLECT INFORMATION?">
        <p>As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns. This includes IP addresses, operating system, browser type, and traffic data.</p>
      </Section>

      <Section title="HOW DOES XEPHRAL USE PERSONAL INFORMATION?">
        <p>We use information that we collect about you or that you provide to us, including any personal information, to:</p>
        <ul>
          <li>Present our Website and its contents to you</li>
          <li>Provide you with information, products, or services that you request from us</li>
          <li>Provide you with notices about your account</li>
          <li>Carry out our obligations and enforce our rights arising from any contracts</li>
          <li>Notify you about changes to our Website or any products or services we offer</li>
          <li>Allow you to participate in interactive features on our Website</li>
          <li>Contact you about our own and third parties' goods and services that may be of interest to you</li>
        </ul>
        <p>If you do not want us to use your information in this way, please adjust your user preferences in your account profile.</p>
      </Section>

      <Section title="WHY MAY XEPHRAL DISCLOSE INFORMATION?">
        <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide:</p>
        <ul>
          <li>To our subsidiaries and affiliates</li>
          <li>To contractors, service providers, and other third parties we use to support our business who are bound by contractual obligations to keep personal information confidential</li>
          <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Xephral's assets</li>
          <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request</li>
          <li>To enforce our terms and agreements</li>
          <li>To protect the rights, property, or safety of Xephral, our clients, or others</li>
          <li>With your consent</li>
        </ul>
      </Section>

      <Section title="HOW IS PERSONAL INFORMATION SECURED?">
        <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration and disclosure.</p>
        <p>The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential.</p>
        <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.</p>
      </Section>

      <Section title="ARE LINKS COVERED BY THE POLICY?">
        <p>We may provide links on the Website to third parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our Website. The information they collect may be associated with your personal information or they may collect information about your online activities over time and across different websites and other online services.</p>
        <p>We do not control these third parties' tracking technologies or how they may be used. This privacy policy does not apply to third-party sites linked from our Website.</p>
      </Section>

      <Section title="WHAT HAPPENS TO INFORMATION I POST?">
        <p>Your User Contributions are posted on and transmitted to others at your own risk. Although we limit access to certain pages, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Website with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.</p>
      </Section>

      <Section title="HOW CAN A USER ACCESS, CHANGE OR DELETE PERSONAL INFORMATION?">
        <p>You may review and change your personal information by logging into the Website and visiting your account profile page. You may also send us an email at <a href="mailto:dee@xephral.com" className="text-primary hover:underline">dee@xephral.com</a> to request access to, correct or delete any personal information that you have provided to us.</p>
        <p>We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.</p>
      </Section>

      <Section title="MAY CHILDREN USE THE WEBSITE?">
        <p>Our Website is not intended for children under 18 years of age. No one under age 18 may provide any personal information to or on the Website. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Website. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information.</p>
      </Section>

      <Section title="HOW ARE POLICY CHANGES COMMUNICATED?">
        <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.</p>
      </Section>

      <Section title="GOOGLE APIs">
        <p>Xephral's use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements. We obtain explicit user consent before sharing data with any third-party tools.</p>
      </Section>

      <Section title="CONTACT XEPHRAL">
        <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br />
        <a href="mailto:dee@xephral.com" className="text-primary hover:underline">dee@xephral.com</a></p>
      </Section>

      <p className="text-muted text-sm mt-16 border-t border-white/10 pt-8">© 2026 Xephral. All Rights Reserved.</p>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-xl mb-4 text-ink">{title}</h2>
      <div className="text-muted leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  )
}
