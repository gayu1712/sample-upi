import React from 'react'
import { SvgXml } from 'react-native-svg'
import PropTypes from 'prop-types'

const QRCode = (props) => {
  const xml = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  fill="none"
  viewBox="0 0 25 25">
  <path
    fill="#898989"
    d="M14.453 13.966a.487.487 0 10-.487-.486c0 .262.225.486.487.486zM3.707 13.966a.487.487 0 10-.487-.486c0 .262.225.486.487.486zM.487 6.153a.487.487 0 00.487-.486V.974h4.692a.487.487 0 00.487-.487A.496.496 0 005.667 0H.487A.496.496 0 000 .487v5.18c0 .262.225.486.487.486zM6.153 24.513a.487.487 0 00-.486-.487H.974v-4.693a.487.487 0 00-.487-.486.496.496 0 00-.487.486v5.18c0 .275.225.487.487.487h5.18a.487.487 0 00.486-.487zM24.513 18.847a.487.487 0 00-.487.486v4.693h-4.693a.487.487 0 000 .974h5.18a.487.487 0 00.487-.487v-5.18a.487.487 0 00-.487-.486zM24.513 0h-5.18a.487.487 0 00-.486.487c0 .262.224.487.486.487h4.693v4.692a.487.487 0 00.974 0V.487A.487.487 0 0024.513 0z">
  </path>
  <path
    fill="#898989"
    d="M3.22 21.293c0 .275.225.487.487.487h4.88a.487.487 0 00.487-.487v-4.88a.487.487 0 00-.487-.487h-4.88a.487.487 0 00-.487.487v4.88zm.974-4.393h3.919v3.906h-3.92V16.9zM8.6 3.22H3.707a.487.487 0 00-.487.487v4.88c0 .275.225.487.487.487h4.88a.487.487 0 00.487-.487v-4.88A.477.477 0 008.6 3.22zm-.487 4.893h-3.92v-3.92h3.92v3.92zM21.78 3.707a.487.487 0 00-.487-.487h-4.88a.487.487 0 00-.487.487v4.88c0 .275.225.487.487.487h4.88a.487.487 0 00.487-.487v-4.88zm-.974 4.406H16.9v-3.92h3.906v3.92zM21.78 21.293v-4.88a.487.487 0 00-.487-.487h-4.88a.487.487 0 00-.487.487v4.88c0 .275.225.487.487.487h4.88a.48.48 0 00.487-.487zm-.974-.487H16.9V16.9h3.906v3.906z">
  </path>
  <path
    fill="#898989"
    d="M6.64 17.873h-.974a.487.487 0 00-.486.487v.974c0 .274.224.486.486.486h.974a.487.487 0 00.487-.486v-.974a.487.487 0 00-.487-.487zM5.666 7.127h.974a.487.487 0 00.487-.487v-.974a.487.487 0 00-.487-.486h-.974a.487.487 0 00-.486.486v.974a.48.48 0 00.486.487zM18.36 7.127h.973a.487.487 0 00.487-.487v-.974a.487.487 0 00-.487-.486h-.973a.487.487 0 00-.487.486v.974c0 .275.225.487.487.487zM18.36 19.833h.973a.487.487 0 00.487-.487v-.974a.487.487 0 00-.487-.486h-.973a.487.487 0 00-.487.486v.974c0 .262.225.487.487.487zM5.18 13.48c0 .274.224.486.486.486h6.353v2.447a.487.487 0 00.974 0V13.48a.487.487 0 00-.487-.487h-6.84a.48.48 0 00-.486.487zM8.6 12.02a.487.487 0 00.486-.487c0-.262-.224-.5-.486-.5H3.707a.487.487 0 00-.487.487c0 .262.225.487.487.487H8.6v.013zM10.547 12.02h1.96a.487.487 0 00.486-.487.496.496 0 00-.487-.487h-1.96a.487.487 0 00-.486.487c0 .262.225.486.487.486zM10.547 3.22a.487.487 0 00-.487.487v4.88c0 .275.225.487.487.487h3.42v2.446c0 .275.224.487.486.487h1.96a.487.487 0 00.487-.487.496.496 0 00-.487-.486h-1.46V8.6a.487.487 0 00-.487-.487h-3.432V3.707a.487.487 0 00-.487-.487zM21.293 11.033H18.36a.487.487 0 00-.487.487c0 .262.225.487.487.487h2.933a.487.487 0 000-.974zM21.293 12.993h-4.88a.487.487 0 000 .973h4.88a.487.487 0 000-.973zM12.506 17.873h-1.96a.487.487 0 00-.486.487v2.933c0 .275.225.487.487.487a.496.496 0 00.487-.487v-2.446h1.46a.487.487 0 00.012-.974z">
  </path>
  <path
    fill="#898989"
    d="M13.967 20.806h-1.46a.487.487 0 000 .974h1.959a.487.487 0 00.487-.487v-5.866a.487.487 0 00-.487-.487.496.496 0 00-.487.487v5.38h-.012zM14.453 7.127a.487.487 0 00.487-.487V3.707a.487.487 0 00-.487-.487.496.496 0 00-.486.487v2.446h-1.46a.487.487 0 000 .974h1.946z">
  </path>
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
export default QRCode

QRCode.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
