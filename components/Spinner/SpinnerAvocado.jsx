import React from 'react'

import Styles from '@components/Spinner/spinner.module.css'
import Spinner from 'react-bootstrap/Spinner'

const SpinnerAvocado = () => {
  return (
    <div className={Styles.showSpinner}>
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
    </div>
  )
}

export default SpinnerAvocado
