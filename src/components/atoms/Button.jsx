import clsx from 'clsx'
import React from 'react'

const Button = ({ icon, children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <>
        <span>
            <span>Marker</span>
            {icon && (
                <img src={icon} alt="circle" className='size-10 mr-5 object-container z-10'/>
            )}

            <span>
                {children}
            </span>
        </span>
        </>
    )

  return href ? (
    <a href={href} className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}>
        <Inner />
    </a>
  ) : (
    <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)} onClick={onClick}>
        <Inner />
    </button>
  )
}

export default Button