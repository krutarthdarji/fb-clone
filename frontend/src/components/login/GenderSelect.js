import { useMediaQuery } from 'react-responsive'

function GenderSelect({ handleRegisterChange, genderError }) {
  const view3 = useMediaQuery({
    query: '(min-width: 1170px)',
  })
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${genderError && !view3 ? '50px' : '0px'}` }}
    >
      <label htmlFor="male">
        Male
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor="female">
        Female
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor="custom">
        Custom
        <input
          type="radio"
          name="gender"
          id="custom"
          value="Custom"
          onChange={handleRegisterChange}
        />
      </label>
      {genderError && (
        <div
          className={
            !view3 ? 'input_error' : 'input_error input_error_select_large'
          }
        >
          <div
            className={!view3 ? 'error_arrow_bottom' : 'error_arrow_left'}
          ></div>
          {genderError}
        </div>
      )}
    </div>
  )
}

export default GenderSelect