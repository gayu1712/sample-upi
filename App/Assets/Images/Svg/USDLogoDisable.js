import React from 'react'
import { SvgXml } from 'react-native-svg'
import PropTypes from 'prop-types'

const USDLogoDisable = (props) => {
  const xml = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="134"
  height="135"
  fill="none"
  viewBox="0 0 134 135"
>
  <circle
    cx="66.863"
    cy="67.523"
    r="66.863"
    fill="#C4C4C4"
    transform="rotate(-90 66.863 67.523)"
  ></circle>
  <path
    fill="#fff"
    d="M63.028 93.423s-1.212-.28-3.589-.883c-2.376-.605-4.52-1.348-6.431-2.278-1.91-.93-3.216-1.952-4.008-3.02l4.38-7.762c1.772 1.58 3.776 2.788 6.013 3.671 2.237.837 4.614 1.302 7.037 1.302 2.657 0 4.66-.511 6.152-1.58 1.445-1.023 2.19-2.51 2.19-4.416v-.046c0-1.348-.326-2.37-.978-3.16-.653-.79-1.492-1.349-2.517-1.72-1.025-.372-2.33-.697-3.961-.976-.047 0-.094-.047-.14-.047-.047 0-.093 0-.14-.046-.047 0-.14-.047-.233-.047h-.233c-3.216-.604-5.826-1.255-7.876-2.045-2.004-.743-3.729-2.138-5.173-4.09-1.445-1.998-2.144-4.787-2.144-8.458v-.047c0-3.207.652-5.995 2.004-8.273 1.351-2.277 3.309-4.043 5.825-5.205 2.517-1.208 5.593-1.813 9.228-1.813 1.631 0 3.309.186 4.987.605a28.126 28.126 0 015.033 1.766c1.631.743 3.17 1.72 4.66 2.788l-4.008 7.948c-1.724-1.348-3.495-2.37-5.359-3.114-1.864-.744-3.635-1.07-5.36-1.07-2.423 0-4.334.466-5.685 1.442-1.352.976-2.004 2.277-2.004 3.997v.046c0 1.487.373 2.65 1.118 3.486.746.836 1.678 1.44 2.796 1.859 1.119.372 2.61.79 4.568 1.208h.093c.093 0 .233.047.326.047s.233.046.326.046c2.89.65 5.313 1.395 7.27 2.278 1.958.883 3.543 2.277 4.848 4.229C83.347 71.997 84 74.693 84 78.039v.046c0 3.16-.7 5.903-2.097 8.134-1.398 2.277-3.402 3.997-6.059 5.159-2.516 1.44-5.685 2.045-9.414 2.045h-3.402zM62.702 37h9.414v7.808h-9.414V37zm0 53.727h9.414V99h-9.414v-8.273z"
  ></path>
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
export default USDLogoDisable

USDLogoDisable.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
