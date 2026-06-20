import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink px-6 py-20 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-widest">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="font-display font-bold text-4xl mb-4">Terms and Conditions</h1>
      <p className="text-muted leading-relaxed mb-12">Last updated: June 2026</p>

      <Section number="1" title="AGREEMENT TO TERMS">
        <p>These Terms and Conditions, alongside the Service Agreement, create a legally binding contract between the Client (as identified in the Service Agreement) and Xephral regarding access to and use of http://www.xephral.com (the "Site"). By accessing the Site, users acknowledge they have reviewed and accept all terms. Xephral reserves discretion to modify these Terms and Conditions at any time, with updates posted on the Site. Continued use after updates indicates acceptance of revised terms.</p>
      </Section>

      <Section number="2" title="CLIENT ACCESS AND CLIENT DATA">
        <p>Xephral grants Clients a non-exclusive, non-transferable right to access the Site and Services during the term for authorized users only, limited to "internal business use." Password access is provided for security purposes, with authorized user limits capped at five unless expressly agreed otherwise in writing. Clients retain ownership of their uploaded data, while Xephral receives "a non-exclusive, royalty-free, worldwide license to reproduce, distribute, and use and display the Client data solely to the extent necessary for Xephral to provide the Services." Importantly, "all knowledge that Xephral's artificial intelligence model creates or adapts from learning about Client's business...shall be the property of Xephral."</p>
      </Section>

      <Section number="3" title="XEPHRAL'S INTELLECTUAL PROPERTY RIGHTS">
        <p>Xephral retains ownership of all intellectual property on the Site, including source code, databases, software, designs, audio, video, text, and graphics protected by copyright and trademark laws. Clients cannot copy, modify, create derivative works, rent, lease, sell, sublicense, distribute, reverse engineer, disassemble, decompile, or remove proprietary notices from the Services or Site.</p>
      </Section>

      <Section number="4" title="CLIENT REPRESENTATIONS">
        <p>Users represent and warrant that:</p>
        <ul>
          <li>All registration information is true, accurate, current, and complete</li>
          <li>Registration information will be maintained and updated as necessary</li>
          <li>They will comply with these Terms and Conditions</li>
          <li>They will not access the Site through automated or non-human means (bots, scripts)</li>
          <li>They will not use the Site for illegal or unauthorized purposes</li>
          <li>Their use will not violate applicable laws or regulations</li>
          <li>They have obtained required TCPA consent from prospective customers for Xephral to contact them on their behalf</li>
        </ul>
        <p>Xephral may suspend or terminate accounts if information is untrue, inaccurate, incomplete, or not current.</p>
      </Section>

      <Section number="5" title="CLIENT REGISTRATION">
        <p>Registration is required to use the Site. Clients are responsible for maintaining password security and bear responsibility for all account usage. Xephral reserves the right to remove, reclaim, or change usernames deemed inappropriate or objectionable.</p>
      </Section>

      <Section number="6" title="CONFIDENTIALITY">
        <p>Either party may disclose confidential information regarding business affairs, services, intellectual property, trade secrets, and sensitive or proprietary information orally or in written/electronic form. Confidential Information excludes information that is: (a) publicly available (not due to breach); (b) received non-confidentially from third parties; (c) previously known; (d) independently developed; or (e) legally required to be disclosed.</p>
        <p>The Receiving Party must protect Confidential Information "with at least the same degree of care as the Receiving Party would protect its own Confidential Information, but in no event with less than a commercially reasonable degree of care" for three years. It cannot be used beyond agreement performance or disclosed except to representatives needing access. A separate nondisclosure agreement would supersede this section.</p>
      </Section>

      <Section number="7" title="CANCELLATION">
        <p>Clients pay for all scheduled appointments through the termination effective date if Services end.</p>
      </Section>

      <Section number="8" title="PROHIBITED ACTIVITIES">
        <p>Clients agree not to:</p>
        <ul>
          <li>Use Site information to harass, abuse, or harm others</li>
          <li>Use the Site inconsistently with applicable laws</li>
          <li>Upload viruses, malware, or materials interfering with Site functionality</li>
          <li>Engage in automated system use, data mining, or extraction tools</li>
          <li>Impersonate other users or use others' usernames</li>
          <li>Interfere with or disrupt Site operations or connected services</li>
          <li>Harass Xephral employees or agents</li>
          <li>Bypass access restrictions</li>
          <li>Copy or adapt Site software (Flash, PHP, HTML, JavaScript)</li>
          <li>Decipher, decompile, disassemble, or reverse engineer Site software</li>
          <li>Use automated systems (spiders, robots, scrapers, offline readers)</li>
          <li>Compete with Xephral using the Site</li>
        </ul>
      </Section>

      <Section number="9" title="WARRANTIES AND WARRANTY DISCLAIMER">
        <p>Xephral warrants that Services (i) comply with applicable laws and (ii) contain no viruses or malicious code. Beyond these warranties, "THE SERVICES ARE PROVIDED 'AS IS' AND XEPHRAL HEREBY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE." This includes disclaiming implied warranties of merchantability, fitness, title, and non-infringement.</p>
      </Section>

      <Section number="10" title="SUBMISSIONS">
        <p>Questions, comments, suggestions, feedback, and ideas ("Submissions") become non-confidential Xephral property. "Xephral shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to Client." Clients waive recourse for any Submission usage.</p>
      </Section>

      <Section number="11" title="PRIVACY POLICY">
        <p>Xephral prioritizes data privacy and security. Users agree to Xephral's Privacy Policy, incorporated into these Terms. The Site is hosted in the United States; international users transferring data consent to U.S. processing.</p>
      </Section>

      <Section number="12" title="TERMINATION BY XEPHRAL">
        <p>"XEPHRAL RESERVES THE RIGHT TO, IN ITS SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE...TO ANY PERSON FOR ANY REASON OR FOR NO REASON." Accounts may be deleted without warning. Clients cannot register under different names after termination, and Xephral reserves legal action rights.</p>
      </Section>

      <Section number="13" title="MODIFICATIONS AND INTERRUPTIONS">
        <p>Xephral reserves the right to modify or remove Site contents, change pricing, suspend, or discontinue services without notice. "Xephral cannot guarantee the Site will be available at all times." Users accept no liability for downtime or discontinuance.</p>
      </Section>

      <Section number="14" title="GOVERNING LAW">
        <p>These Terms and Site use are governed by Delaware law, with the U.N. Convention on the Sale of Goods disclaimed.</p>
      </Section>

      <Section number="15" title="DISPUTE RESOLUTION">
        <p><strong>Informal Negotiations:</strong> Parties must attempt informal resolution for at least 30 days before initiating arbitration.</p>
        <p><strong>Binding Arbitration:</strong> Disputes are settled through the American Arbitration Association per Commercial Arbitration Rules, with arbitration in San Francisco, California. Limited discovery applies. "The arbitrator shall award to the prevailing Party, if any, as determined by the arbitrator, all of their costs and fees." No Dispute may commence more than one year after the cause of action arose.</p>
        <p><strong>Exceptions:</strong> IP protection disputes, theft/piracy allegations, and injunctive relief claims are excluded. If arbitration provisions are found illegal, disputes proceed in San Francisco County courts.</p>
      </Section>

      <Section number="16" title="CORRECTIONS">
        <p>Xephral reserves the right to correct typographical errors, inaccuracies, or omissions and update Site information anytime without notice.</p>
      </Section>

      <Section number="17" title="LIMITATIONS OF LIABILITY">
        <p>"IN NO EVENT WILL XEPHRAL OR ITS DIRECTORS, EMPLOYEES AND AGENTS BE LIABLE TO CLIENT OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES." Xephral's total liability is limited to amounts paid by the Client during the preceding six months. State and international laws may apply exceptions.</p>
      </Section>

      <Section number="18" title="INDEMNIFICATION">
        <p>Xephral indemnifies Clients against third-party claims that Xephral's IP or compliant Service use infringes third-party rights, provided the Client promptly notifies Xephral in writing, cooperates, and grants Xephral sole defense control.</p>
        <p>Clients indemnify Xephral against third-party claims arising from: (1) Client's Site use; (2) Client's term breaches; or (3) Client's violation of third-party rights, including privacy violations. Xephral may assume exclusive defense at Client expense, with Client cooperating at their own cost.</p>
      </Section>

      <Section number="19" title="DATA SECURITY / RESTRICTIONS ON USE">
        <p>Xephral employs "reasonable administrative, technical, and physical safeguards to ensure the confidentiality, integrity and availability of Client data, and to prevent unauthorized or inappropriate access, use, or disclosure of Client data." Client data is used solely for Service delivery and not shared, sold, or transferred without Client instruction or legal requirement.</p>
      </Section>

      <Section number="20" title="DATA BACKUPS">
        <p>Xephral maintains routine backups but isn't liable for Client data loss or corruption. "Client is solely responsible for all data that Client transmits." Clients may download data anytime.</p>
      </Section>

      <Section number="21" title="ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES">
        <p>Site visits, emails, and online forms constitute electronic communications. Clients consent to electronic communications and agree these satisfy written communication requirements. "CLIENT HEREBY AGREES TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS AND OTHER RECORDS." Clients waive rights requiring original signatures or non-electronic records.</p>
      </Section>

      <Section number="22" title="FORCE MAJEURE">
        <p>Neither party is liable for delays caused by circumstances beyond control (fire, flood, war, strikes, internet disruption). The affected party provides prompt notice and is excused from performance during the Force Majeure event. Both parties cooperate to resume performance.</p>
      </Section>

      <Section number="23" title="MISCELLANEOUS">
        <p>The Agreement, Terms, and policies constitute the entire understanding. Failure to enforce provisions doesn't waive them. These Terms operate to the fullest permissible extent; any unlawful provisions are severable. No partnership or employment relationship is created. Xephral may assign rights and obligations to others.</p>
      </Section>

      <Section number="24" title="CONTACT XEPHRAL">
        <p>
          Xephral<br />
          Email: <a href="mailto:dee@xephral.com" className="text-primary hover:underline">dee@xephral.com</a>
        </p>
      </Section>

      <p className="text-muted text-sm mt-16 border-t border-white/10 pt-8">© 2026 Xephral. All Rights Reserved.</p>
    </div>
  )
}

function Section({ number, title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-xl mb-4 text-ink">
        {number}. {title}
      </h2>
      <div className="text-muted leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-ink">
        {children}
      </div>
    </div>
  )
}
