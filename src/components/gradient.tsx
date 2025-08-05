import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        // light: from-FFFBEB → dark: from-152534
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))]',
        'from-[#FFFBEB] to-[#FFC62B]',
        'dark:from-[#101820] dark:to-[#FFC62B]/80',
        'sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))]',
          'from-[#FFFBEB] to-[#FFC62B]',
          'dark:from-[#101820] dark:to-[#FFC62B]/80',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
