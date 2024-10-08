import styles from './Select.module.css'
import { useId } from 'react'

function ArrowIcon() {
  return (
    <svg
      className={styles.arrowIcon}
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
  label,
  ...props
}: { label: string } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId()
  let classConstructor = styles.select
  classConstructor += ' ' + (className || '')
  return (
    <div className={styles.selectParent}>
      <label htmlFor={id} className={styles.hidden}>
        {label}
      </label>
      <select id={id} className={classConstructor} {...props} />
      <ArrowIcon />
    </div>
  )
}

function SelectOption({
  className,
  value,
  ...props
}: {
  value: string
} & React.OptionHTMLAttributes<HTMLOptionElement>) {
  let classConstructor = styles.selectOption
  classConstructor += ' ' + (className || '')
  return <option value={value} className={classConstructor} {...props} />
}

export { Select, SelectOption }
