const SCREEN_METADATA: Record<string, { eyebrow: string; label: string }> = {
  'dashboard-auth-clean.png': {
    eyebrow: 'Overview',
    label: 'Patient Dashboard',
  },
  'all-patients.png': {
    eyebrow: 'Records',
    label: 'All Patients Directory',
  },
  'add-patient.png': {
    eyebrow: 'Intake',
    label: 'Add Patient Form',
  },
  'application-print.png': {
    eyebrow: 'Output',
    label: 'Printable Application Sheet',
  },
  'login-auth-clean.png': {
    eyebrow: 'Access',
    label: 'Secure Login Screen',
  },
  'projects-clean.png': {
    eyebrow: 'Portfolio',
    label: 'Projects Archive',
  },
  'projects-clean.svg': {
    eyebrow: 'Portfolio',
    label: 'Projects Archive',
  },
  'about-clean.png': {
    eyebrow: 'Story',
    label: 'About Studio',
  },
  'about-clean.svg': {
    eyebrow: 'Story',
    label: 'About Studio',
  },
  'process-clean.png': {
    eyebrow: 'Approach',
    label: 'Design Process',
  },
  'process-clean.svg': {
    eyebrow: 'Approach',
    label: 'Design Process',
  },
  'contact-clean.png': {
    eyebrow: 'Connect',
    label: 'Contact Experience',
  },
  'contact-clean.svg': {
    eyebrow: 'Connect',
    label: 'Contact Experience',
  },
  'pos-terminal.png': {
    eyebrow: 'Checkout',
    label: 'POS Terminal Workspace',
  },
  'sales-orders.png': {
    eyebrow: 'Sales',
    label: 'Order Management Board',
  },
  'business-setup.png': {
    eyebrow: 'Setup',
    label: 'Business Profile Settings',
  },
  'reports-overview.png': {
    eyebrow: 'Insights',
    label: 'Business Overview Reports',
  },
  'production-note.png': {
    eyebrow: 'Operations',
    label: 'Production Note Workflow',
  },
  'delivery-overview.png': {
    eyebrow: 'Delivery',
    label: 'Delivery Configuration Hub',
  },
  'zone-configuration.png': {
    eyebrow: 'Coverage',
    label: 'Zone-Based Delivery Map',
  },
}

const PORTRAIT_SCREEN_KEYWORDS = ['add-patient', 'application-print']

export function isProjectScreenshot(src: string) {
  return typeof src === 'string' && src.startsWith('/projects/')
}

export function isProjectPortraitScreenshot(src?: string) {
  if (!src) {
    return false
  }

  return PORTRAIT_SCREEN_KEYWORDS.some((keyword) => src.includes(keyword))
}

export function getProjectImageTheme(src?: string) {
  if (!src) {
    return 'default'
  }

  if (src.includes('/ezassist-pos/')) {
    return 'commerce'
  }

  if (src.includes('/dus-app/')) {
    return 'app'
  }

  if (src.includes('/am-associates-top/')) {
    return 'studio'
  }

  return 'default'
}

export function getProjectScreenshotMeta(src: string | undefined, fallbackTitle: string) {
  if (!src) {
    return {
      eyebrow: 'Preview',
      label: fallbackTitle,
      isPortrait: false,
    }
  }

  const fileName = src.split('/').pop() ?? src
  const metadata = SCREEN_METADATA[fileName]

  return {
    eyebrow: metadata?.eyebrow ?? 'Preview',
    label: metadata?.label ?? fallbackTitle,
    isPortrait: isProjectPortraitScreenshot(src),
  }
}
