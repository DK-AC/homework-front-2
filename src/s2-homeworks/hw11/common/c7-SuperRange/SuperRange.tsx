import Slider, {SliderProps} from '@mui/material/Slider'
import React from 'react'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider

      sx={{ // стили для слайдера // пишет студент
        maxWidth:'150px',
        width:'100%',
        margin:'0 13px'
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
