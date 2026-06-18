interface SkillBadgeProps {
  name: string
  proficiency: number
}

export function SkillBadge({ name, proficiency }: SkillBadgeProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-foreground/60">{proficiency}%</span>
      </div>
      <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  )
}
