export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Payment information</li>
          <li>Purchase history</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process your orders</li>
          <li>Send you important updates</li>
          <li>Improve our services</li>
        </ul>

        <h2>3. Information Security</h2>
        <p>We implement appropriate security measures to protect your personal information.</p>
      </div>
    </div>
  )
}