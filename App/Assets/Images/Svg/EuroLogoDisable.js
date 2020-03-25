import React from 'react'
import { SvgXml } from 'react-native-svg'
import PropTypes from 'prop-types'

const EuroLogoDisable = (props) => {
  const xml = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="134"
  height="135"
  fill="none"
  viewBox="0 0 134 135"
>
  <ellipse
    cx="67"
    cy="67.355"
    fill="#C4C4C4"
    rx="67.355"
    ry="67"
    transform="rotate(-90 67 67.355)"
  ></ellipse>
  <path
    fill="#fff"
    d="M86.6 98.592l-1.69-7.678a1.473 1.473 0 00-.724-1.014c-.42-.226-.838-.257-1.256-.096l-.242.096-.58.144c-.258.064-.555.137-.893.217-.339.081-.732.16-1.184.242-.449.08-.926.153-1.424.218a38.36 38.36 0 01-1.617.168c-.58.048-1.159.072-1.739.072-4.089 0-7.768-1.102-11.035-3.307-3.268-2.206-5.675-5.193-7.22-8.959h18.689c.355 0 .677-.12.965-.362.291-.241.468-.539.531-.894l1.16-5.409a1.57 1.57 0 00-.29-1.303c-.322-.387-.725-.58-1.207-.58H54.678c-.096-2.19-.096-3.88 0-5.071h23.567c.87 0 1.385-.419 1.546-1.256l1.159-5.505c.096-.45-.015-.869-.338-1.256-.29-.386-.691-.58-1.207-.58H56.803c1.61-3.606 4.025-6.439 7.245-8.5 3.22-2.06 6.857-3.09 10.914-3.09.13-.065.603-.049 1.424.048.82.096 1.288.137 1.4.12.112-.016.532.033 1.256.145l1.087.169.845.169c.242.049.427.088.556.12l.193.049c.418.13.803.089 1.159-.12.354-.21.58-.524.677-.942l2.077-7.679a1.602 1.602 0 00-.145-1.159c-.29-.387-.612-.628-.967-.725-2.961-.74-6.086-1.11-9.369-1.11-7.213 0-13.659 2.06-19.342 6.181-5.682 4.121-9.602 9.563-11.76 16.323h-4.732c-.45 0-.82.145-1.11.435-.29.29-.435.66-.435 1.11v5.506c0 .45.145.821.434 1.11.29.29.66.435 1.111.435h3.236a52.251 52.251 0 00-.049 5.071h-3.187c-.418 0-.78.153-1.086.459a1.485 1.485 0 00-.46 1.085v5.458c0 .42.154.78.46 1.087.306.306.668.458 1.086.458h4.588c2.028 7.115 5.86 12.774 11.494 16.975 5.635 4.203 12.219 6.303 19.752 6.303.612 0 1.232-.015 1.86-.049a27.76 27.76 0 001.763-.144 46.908 46.908 0 003.066-.459c.435-.08.846-.16 1.232-.24.386-.082.732-.169 1.039-.266.305-.096.562-.169.772-.216a2.41 2.41 0 00.506-.169l.242-.049c.355-.129.628-.362.821-.7.194-.337.241-.7.145-1.086z"
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
export default EuroLogoDisable

EuroLogoDisable.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
