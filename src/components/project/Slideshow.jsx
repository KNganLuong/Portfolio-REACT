import PropTypes from 'prop-types'
import { useState } from 'react'
import arrow_back from '../../assets/images/arrow_back.png'
import arrow_forward from '../../assets/images/arrow_forward.png'

const Slideshow = ({ imgUrl }) => {
  const [currentIndexImg, setIndexImg] = useState(0)

  const handleClick = (typeClick) => {
    if (imgUrl.length > 1) {
      if (typeClick === 'back') {
        setIndexImg(
          currentIndexImg > 0 ? currentIndexImg - 1 : imgUrl.length - 1
        )
      }
      if (typeClick === 'forward') {
        setIndexImg(
          currentIndexImg < imgUrl.length - 1 ? currentIndexImg + 1 : 0
        )
      }
    }
  }

  return (
    <div className='slideshow-container'>
      {imgUrl.length > 0 && (
        <>
          <img
            className='slideshow-pictures'
            src={imgUrl[currentIndexImg]}
            alt={`image-${currentIndexImg}`}
          />
          {imgUrl.length > 1 && (
            <>
              <img
                onClick={() => handleClick('forward')}
                className='arrow arrow-forward'
                id='arrow-forward'
                src={arrow_forward}
                alt='arrow-forward'
              />
              <img
                onClick={() => handleClick('back')}
                className='arrow arrow-back'
                id='arrow-back'
                src={arrow_back}
                alt='arrow-back'
              />
              <div className='numereting'>
                {currentIndexImg + 1} / {imgUrl.length}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

Slideshow.propTypes = {
  imgUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Slideshow
