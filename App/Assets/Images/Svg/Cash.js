import React from 'react'
import { SvgXml } from 'react-native-svg'
import { PropTypes } from 'prop-types'

const Cash = (props) => {
  const xml = `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#3AD1BF"
        fillRule="evenodd"
        d="M0 17V5h24v12H0zm3.756-1.5h5.268C8.09 14.4 7.5 12.792 7.5 11c0-1.792.59-3.4 1.524-4.5H4.5a3 3 0 01-3 3v3.744A2.256 2.256 0 013.756 15.5zm9.74-2.273c.197-.125.356-.285.477-.481.12-.196.181-.432.181-.709a1.249 1.249 0 00-.577-1.05 1.592 1.592 0 00-.452-.208c-.07-.019-.184-.047-.344-.087l-.36-.088V9.181c.115.032.22.077.312.135.192.122.305.325.34.606h.932a1.338 1.338 0 00-.162-.613 1.502 1.502 0 00-.44-.494 1.983 1.983 0 00-.645-.3 2.77 2.77 0 00-.336-.07V8h-.844v.442a2.963 2.963 0 00-.304.058c-.232.058-.44.147-.622.267-.183.12-.33.27-.44.453a1.217 1.217 0 00-.168.646c0 .13.019.256.056.38.037.125.1.242.189.353.089.11.208.21.359.3.15.09.34.163.566.219l.364.09v1.61c-.156-.038-.295-.1-.415-.183a.846.846 0 01-.29-.314 1.066 1.066 0 01-.102-.43h-.925c.009.234.07.524.184.738.118.223.276.4.474.542.197.143.43.246.696.315.122.031.248.055.378.072V14h.844v-.433c.134-.014.268-.037.4-.067.251-.057.476-.149.673-.273zM20.25 15.5a2.268 2.268 0 012.25-2.256V9.5a3 3 0 01-3-3h-4.524C15.91 7.6 16.5 9.208 16.5 11c0 1.792-.59 3.4-1.524 4.5h5.274zM6 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm13.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.078-1.087c.134.037.258.074.37.112.108.037.208.1.3.19.09.09.137.23.137.419 0 .092-.02.183-.06.273a.617.617 0 01-.192.239c-.089.069-.205.125-.348.169-.063.02-.133.034-.207.045v-1.447zm-1.36-1.962a.506.506 0 00-.092.311c0 .176.058.313.174.412.111.095.256.168.434.218V9.157a1.096 1.096 0 00-.282.097.668.668 0 00-.233.197zM24 18.5H0V20h24v-1.5z"
        clipRule="evenodd"
      ></path>
      <mask
        id="a"
        width="24"
        height="15"
        x="0"
        y="5"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 17V5h24v12H0zm3.756-1.5h5.268C8.09 14.4 7.5 12.792 7.5 11c0-1.792.59-3.4 1.524-4.5H4.5a3 3 0 01-3 3v3.744A2.256 2.256 0 013.756 15.5zm9.74-2.273c.197-.125.356-.285.477-.481.12-.196.181-.432.181-.709a1.249 1.249 0 00-.577-1.05 1.592 1.592 0 00-.452-.208c-.07-.019-.184-.047-.344-.087l-.36-.088V9.181c.115.032.22.077.312.135.192.122.305.325.34.606h.932a1.338 1.338 0 00-.162-.613 1.502 1.502 0 00-.44-.494 1.983 1.983 0 00-.645-.3 2.77 2.77 0 00-.336-.07V8h-.844v.442a2.963 2.963 0 00-.304.058c-.232.058-.44.147-.622.267-.183.12-.33.27-.44.453a1.217 1.217 0 00-.168.646c0 .13.019.256.056.38.037.125.1.242.189.353.089.11.208.21.359.3.15.09.34.163.566.219l.364.09v1.61c-.156-.038-.295-.1-.415-.183a.846.846 0 01-.29-.314 1.066 1.066 0 01-.102-.43h-.925c.009.234.07.524.184.738.118.223.276.4.474.542.197.143.43.246.696.315.122.031.248.055.378.072V14h.844v-.433c.134-.014.268-.037.4-.067.251-.057.476-.149.673-.273zM20.25 15.5a2.268 2.268 0 012.25-2.256V9.5a3 3 0 01-3-3h-4.524C15.91 7.6 16.5 9.208 16.5 11c0 1.792-.59 3.4-1.524 4.5h5.274zM6 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm13.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.078-1.087c.134.037.258.074.37.112.108.037.208.1.3.19.09.09.137.23.137.419 0 .092-.02.183-.06.273a.617.617 0 01-.192.239c-.089.069-.205.125-.348.169-.063.02-.133.034-.207.045v-1.447zm-1.36-1.962a.506.506 0 00-.092.311c0 .176.058.313.174.412.111.095.256.168.434.218V9.157a1.096 1.096 0 00-.282.097.668.668 0 00-.233.197zM24 18.5H0V20h24v-1.5z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#a)">
        <path fill="#3AD1BF" d="M0 0H24V24H0z"></path>
      </g>
    </svg>
	`
  return (
    <SvgXml
      xml={xml}
      width={props.width ? props.width : '100%'}
      height={props.height ? props.height : '100%'}
    />
  )
}
export default Cash

Cash.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
