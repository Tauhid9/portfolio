interface SkillBadgeProps {
  name: string
  tone?: 'default' | 'subtle'
}

export function SkillBadge({ name, tone = 'default' }: SkillBadgeProps) {
  return (
    <span
      className={
        tone === 'subtle'
          ? 'inline-flex rounded-full border border-border/70 bg-muted/60 px-3 py-2 text-sm font-medium text-foreground/80'
          : 'inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-2 text-sm font-medium text-foreground/88 transition-colors hover:border-primary/35 hover:bg-primary/15'
      }
    >
      {name}
    </span>
  )
}
