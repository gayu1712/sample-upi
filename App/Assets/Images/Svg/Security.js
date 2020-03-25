import React from 'react'
import { SvgXml } from 'react-native-svg'
import PropTypes from 'prop-types'

const Security = (props) => {
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
        d="M18 8.292V6A6 6 0 006 6v2.292a9 9 0 1012 0zM7.5 6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v1.204A8.958 8.958 0 0012 6c-1.64 0-3.176.439-4.5 1.204V6zM12 22.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-14.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm5.744 8.32l-1.131-.37-.184.571 1.133.37a5.981 5.981 0 01-.669 1.286l-.495-.363-.175.243.495.363a5.953 5.953 0 01-.986 1.016l-.702-.974-.482.352.702.974c-.398.26-.828.475-1.284.635l-.186-.577-.284.093.231.575a6.17 6.17 0 01-1.352.236v-.891h-.75V21a5.458 5.458 0 01-1.37-.237l.184-.526-.293-.098-.166.526a5.881 5.881 0 01-1.259-.627l.703-.973-.481-.353-.702.974a5.952 5.952 0 01-.983-1.012l.448-.328-.186-.258-.448.328a5.977 5.977 0 01-.66-1.274l1.132-.371-.184-.571-1.13.37a5.824 5.824 0 01-.2-1.383h.251v-.318h-.28c.01-.498.03-.98.152-1.439l1.168.37.204-.57-1.123-.372c.168-.448.392-.87.655-1.26l.485.353.176-.243-.482-.353c.291-.387.63-.737 1.005-1.04l.702.974.482-.354-.702-.973c.394-.259.82-.471 1.273-.63l.185.573.284-.093-.217-.573A5.473 5.473 0 0111.625 9v.891h.75V9c.422.023.898.103 1.34.232l-.223.623.29.098.195-.624c.455.16.88.373 1.275.633l-.703.973.482.354.701-.975c.372.302.707.648.997 1.03l-.53.388.186.258.529-.387c.262.388.48.809.648 1.255l-1.133.371.184.572 1.13-.37c.122.459.247.94.257 1.438h-.375v.319h.318c-.014.515-.083.94-.2 1.382zM12 18.797a3.797 3.797 0 100-7.594 3.797 3.797 0 000 7.594z"
        clipRule="evenodd"
      ></path>
      <mask
        id="a"
        width="18"
        height="24"
        x="3"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M18 8.292V6A6 6 0 006 6v2.292a9 9 0 1012 0zM7.5 6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v1.204A8.958 8.958 0 0012 6c-1.64 0-3.176.439-4.5 1.204V6zM12 22.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-14.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm5.744 8.32l-1.131-.37-.184.571 1.133.37a5.981 5.981 0 01-.669 1.286l-.495-.363-.175.243.495.363a5.953 5.953 0 01-.986 1.016l-.702-.974-.482.352.702.974c-.398.26-.828.475-1.284.635l-.186-.577-.284.093.231.575a6.17 6.17 0 01-1.352.236v-.891h-.75V21a5.458 5.458 0 01-1.37-.237l.184-.526-.293-.098-.166.526a5.881 5.881 0 01-1.259-.627l.703-.973-.481-.353-.702.974a5.952 5.952 0 01-.983-1.012l.448-.328-.186-.258-.448.328a5.977 5.977 0 01-.66-1.274l1.132-.371-.184-.571-1.13.37a5.824 5.824 0 01-.2-1.383h.251v-.318h-.28c.01-.498.03-.98.152-1.439l1.168.37.204-.57-1.123-.372c.168-.448.392-.87.655-1.26l.485.353.176-.243-.482-.353c.291-.387.63-.737 1.005-1.04l.702.974.482-.354-.702-.973c.394-.259.82-.471 1.273-.63l.185.573.284-.093-.217-.573A5.473 5.473 0 0111.625 9v.891h.75V9c.422.023.898.103 1.34.232l-.223.623.29.098.195-.624c.455.16.88.373 1.275.633l-.703.973.482.354.701-.975c.372.302.707.648.997 1.03l-.53.388.186.258.529-.387c.262.388.48.809.648 1.255l-1.133.371.184.572 1.13-.37c.122.459.247.94.257 1.438h-.375v.319h.318c-.014.515-.083.94-.2 1.382zM12 18.797a3.797 3.797 0 100-7.594 3.797 3.797 0 000 7.594z"
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
export default Security

Security.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
