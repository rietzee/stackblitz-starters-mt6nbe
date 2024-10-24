export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. License Keys</h2>
        <p>All software license keys sold through our platform:</p>
        <ul>
          <li>Are for single use only</li>
          <li>Cannot be resold or transferred</li>
          <li>Are non-refundable once activated</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>Users are responsible for:</p>
        <ul>
          <li>Maintaining account security</li>
          <li>Providing accurate information</li>
          <li>Complying with software terms</li>
        </ul>
      </div>
    </div>
  )
}