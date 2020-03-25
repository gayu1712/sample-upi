import React from 'react'
import { SvgXml } from 'react-native-svg'
import PropTypes from 'prop-types'

const DocTypeIdCard = (props) => {
  const xml = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="65"
  height="43"
  fill="none"
  viewBox="0 0 65 43"
>
  <path fill="#119BD2" d="M1.737 0.934H63.348V8.402H1.737z"></path>
  <rect
    width="62.017"
    height="40.199"
    x="1.803"
    y="1"
    stroke="#119BD2"
    strokeWidth="2"
    rx="2"
  ></rect>
  <path fill="#DADADA" d="M31.252 17.742H48.275V20.14H31.252z"></path>
  <path
    fill="#DADADA"
    d="M31.252 23.737H58.825V26.134999999999998H31.252z"
  ></path>
  <path fill="#DADADA" d="M31.252 29.73H58.825V32.128H31.252z"></path>
  <path fill="#DADADA" d="M31.252 35.726H58.825V38.124H31.252z"></path>
  <path fill="#DADADA" d="M5.118 14.146H24.299V37.643H5.118z"></path>
  <g clip-path="url(#clip0)">
    <path
      fill="#119BD2"
      d="M23.67 36.4a6.53 6.53 0 00-6.065-4.12h-5.646a6.536 6.536 0 00-6.064 4.12l-.683 1.722h19.14L23.67 36.4z"
    ></path>
    <path
      fill="#C4E6F4"
      d="M16.747 30.903l-.332-1.35h-3.248l-.325 1.338c-.132.54-.489.999-.977 1.263l-.219.119c-.012.063-.012.082-.025.144.282.34 1.59.597 3.16.597 1.572 0 2.874-.257 3.161-.597-.012-.062-.012-.087-.024-.144l-.207-.113a1.972 1.972 0 01-.964-1.257z"
    ></path>
    <path
      fill="#fff"
      d="M17.604 32.28h-5.646c-.119 0-.231.006-.35.012a6.446 6.446 0 003.173 4.831 6.473 6.473 0 003.173-4.831c-.119-.006-.231-.013-.35-.013z"
    ></path>
    <path
      fill="#99D5ED"
      d="M11.614 32.292c.057.459.163.898.307 1.325l.77.56c.507.364 1.214.22 1.533-.315.282-.464.557-.923.557-.923l-.763-.66h-2.053c-.12 0-.238.007-.35.013zM17.604 32.28h-2.002l-.764.659s.275.452.557.923a1.064 1.064 0 001.533.315l.708-.51c.15-.44.262-.891.319-1.369a3.292 3.292 0 00-.35-.019z"
    ></path>
    <path
      fill="#2CADE0"
      d="M15.746 36.426c-.156-1.526-.513-2.752-.964-3.342-.45.584-.807 1.816-.964 3.342.3.258.62.496.964.698a5.79 5.79 0 00.964-.698z"
    ></path>
    <path
      fill="#008AC1"
      d="M14.782 37.13a6.61 6.61 0 00.964-.698c-.157-1.526-.514-2.752-.964-3.342v4.04z"
    ></path>
    <path
      fill="#068BC0"
      d="M13.173 32.292a1.617 1.617 0 001.608 1.583c.877 0 1.59-.703 1.609-1.583h-3.217z"
    ></path>
    <path
      fill="#119BD2"
      d="M15.41 17.742h-1.252c-2.66 0-4.832 2.08-5.001 4.706-.012.213.013.42.056.628l.476 2.337h10.19l.475-2.337c.044-.207.069-.421.056-.628-.169-2.626-2.34-4.706-5-4.706z"
    ></path>
    <path
      fill="#DCF3FC"
      d="M19.608 27.128v-3.511c0-.73-.42-1.395-1.083-1.703a8.83 8.83 0 00-7.492 0 1.88 1.88 0 00-1.076 1.703v3.511c0 1.05.557 2.023 1.464 2.545l.463.27a5.79 5.79 0 005.796 0l.463-.27a2.934 2.934 0 001.465-2.545z"
    ></path>
    <path
      fill="#C4E6F4"
      d="M9.956 26.626a.814.814 0 01-.813-.817v-.785c0-.453.363-.817.813-.817v2.419zM19.608 26.626c.45 0 .814-.365.814-.817v-.785a.814.814 0 00-.814-.817v2.419z"
    ></path>
    <path
      fill="#fff"
      d="M13.079 30.822a.23.23 0 00-.332.031l-1.114 1.414-.025.031 1.42 1.03a.883.883 0 001.284-.263c.238-.39.463-.773.463-.773l-1.696-1.47zM16.528 30.822a.23.23 0 01.332.031l1.114 1.414.025.031-1.42 1.03a.883.883 0 01-1.284-.263c-.238-.39-.463-.773-.463-.773l1.696-1.47z"
    ></path>
    <path
      fill="#119BD2"
      d="M15.633 20.57l-5.057 1.01-.37-1.859a1.658 1.658 0 011.621-1.979h3.806v2.827z"
    ></path>
  </g>
  <path
    fill="#fff"
    d="M33.086 6.21c0 .205.162.367.372.367a.364.364 0 00.366-.366V2.683a.364.364 0 00-.366-.366.365.365 0 00-.372.366V6.21zm1.862-.035c0 .21.162.372.372.372h1.194c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.912-2.088-2.232-2.088H35.32a.366.366 0 00-.372.372v3.456zm.738-.3V3.019h.828c.882 0 1.458.606 1.458 1.428v.012c0 .822-.576 1.416-1.458 1.416h-.828zm7.704.744c.678 0 1.128-.216 1.524-.564.066-.06.12-.15.12-.264a.351.351 0 00-.348-.342.336.336 0 00-.222.084c-.306.258-.606.402-1.05.402-.804 0-1.386-.666-1.386-1.488v-.012c0-.822.588-1.482 1.386-1.482.402 0 .714.144 1.002.378a.36.36 0 00.222.072.359.359 0 00.366-.36.369.369 0 00-.144-.294c-.366-.282-.792-.474-1.44-.474-1.272 0-2.166.978-2.166 2.172v.012c0 1.206.912 2.16 2.136 2.16zm2.192-.384c0 .192.15.342.342.342a.355.355 0 00.342-.234l.354-.81h2.04l.342.786c.066.156.186.258.36.258a.346.346 0 00.306-.51l-1.56-3.48c-.084-.186-.228-.3-.438-.3h-.036c-.21 0-.36.114-.444.3l-1.56 3.48a.378.378 0 00-.048.168zm1.32-1.356l.738-1.698.738 1.698h-1.476zm3.609 1.332c0 .204.162.366.372.366a.364.364 0 00.366-.366V5.083h.93l1.02 1.302a.422.422 0 00.36.192c.18 0 .354-.138.354-.342 0-.114-.048-.192-.12-.282l-.804-1.014c.564-.174.954-.582.954-1.254v-.012a1.27 1.27 0 00-.348-.906c-.27-.264-.684-.42-1.212-.42h-1.5a.366.366 0 00-.372.372V6.21zm.738-1.782v-1.41h1.074c.546 0 .87.246.87.696v.012c0 .426-.336.702-.864.702h-1.08zm3.598 1.746c0 .21.162.372.372.372h1.194c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.912-2.088-2.232-2.088h-1.194a.366.366 0 00-.372.372v3.456zm.738-.3V3.019h.828c.882 0 1.458.606 1.458 1.428v.012c0 .822-.576 1.416-1.458 1.416h-.828z"
  ></path>
  <defs>
    <clipPath id="clip0">
      <path
        fill="#fff"
        d="M0 0H19.14V20.38H0z"
        transform="translate(5.212 17.742)"
      ></path>
    </clipPath>
  </defs>
</svg>`
  return (
    <SvgXml
      xml={xml}
      width={props.width ? props.width : '100%'}
      height={props.height ? props.height : '100%'}
    />
  )
}
export default DocTypeIdCard

DocTypeIdCard.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}