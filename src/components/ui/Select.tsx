import styles from './Select.module.css'

function ArrowIcon() {
  return (
    <svg
      className={styles['arrow-icon']}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='m6 9 6 6 6-6'></path>
    </svg>
  )
}

function Select({
  className,
  value,
  onChange,
  ...props
}: {
  className?: string
  value: string
  onChange: (value: string) => void
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  let classConstructor = styles['select']
  classConstructor += ' ' + (className || '')
  return (
    <div className={styles['select-parent']}>
      <select
        className={classConstructor}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      <ArrowIcon />
    </div>
  )
}

function SelectOption({
  className,
  value,
  ...props
}: {
  className?: string
  value: string
} & React.OptionHTMLAttributes<HTMLOptionElement>) {
  let classConstructor = styles['select-option']
  classConstructor += ' ' + (className || '')
  return <option value={value} className={classConstructor} {...props} />
}

export { Select, SelectOption }
