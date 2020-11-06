import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import pt from 'date-fns/locale/pt'

function Calendario({ locale, onChange, ...rest }) {
  registerLocale('pt', pt)

  return (
    <DatePicker
      onChange={onChange}
      locale={locale || 'pt'}
      dateFormat='dd/MM/yyyy'
      // mostrar o drop de seleção do ano
      showYearDropdown
      dateFormatCalendar='MMMM'
      yearDropdownItemNumber={5}
      scrollableYearDropdown
      {...rest}
    />
  )
}

export default Calendario
