export function getSvg(svgName) {
  switch (svgName) {
    case "home-icon":
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          className="icon_35c1b9ef14 icon"
          data-testid="icon"
        >
          <path
            d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );

    case "white-arrow":
      return (
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,12 24,12 12,0" fill="white" />
        </svg>
      );

    case "trash":
      return (
        <svg width="24" height="18">
          <path d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z">
            {" "}
          </path>
        </svg>
      );

    case "status-icon":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
          <rect width="20" height="20" rx="3.636" fill="#00C875"></rect>
          <g filter="url(#filter0_d_43912_44076)" fill="#fff">
            <rect
              x="5.227"
              y="5.453"
              width="9.318"
              height="2.727"
              rx=".455"
            ></rect>
            <rect
              x="5.227"
              y="8.635"
              width="9.318"
              height="2.727"
              rx=".455"
            ></rect>
            <rect
              x="5.227"
              y="11.816"
              width="9.318"
              height="2.727"
              rx=".455"
            ></rect>
          </g>
          <defs>
            <filter
              id="filter0_d_43912_44076"
              x="3.408"
              y="4.544"
              width="12.955"
              height="12.727"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy=".909"></feOffset>
              <feGaussianBlur stdDeviation=".909"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.200691 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43912_44076"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_43912_44076"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      );

    // there is imposter amoung us...
    case "priority-icon":
      return (
        <img
          class="monday-column-icon-component__icon"
          style={{ width: "20px", height: "20px" }}
          src="https://files.monday.com/euc1/photos/10162286/original/app_version_10162286_photo_2023_10_26_13_37_04.png?1738076366987"
          alt=""
        ></img>
      );

    case "members-icon":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
          <rect width="20" height="20" rx="3.636" fill="#66CCFF"></rect>
          <g filter="url(#filter0_d_43912_44048)">
            <path
              d="M12.8621 6.97735C12.8621 8.53537 11.6127 9.79841 10.0716 9.79841C8.53054 9.79841 7.28122 8.53537 7.28122 6.97735C7.28122 5.41929 8.53054 4.15625 10.0716 4.15625C11.6127 4.15625 12.8621 5.41929 12.8621 6.97735ZM5.16364 14.7105C5.34269 12.6195 6.79164 10.8633 10.0839 10.8633C13.3761 10.8633 14.825 12.6195 15.0041 14.7105C15.0255 14.9607 14.8197 15.1647 14.5687 15.1647H5.59905C5.34801 15.1647 5.14223 14.9607 5.16364 14.7105Z"
              fill="#fff"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_43912_44048"
              x="3.344"
              y="3.247"
              width="13.48"
              height="14.645"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy=".909"></feOffset>
              <feGaussianBlur stdDeviation=".909"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43912_44048"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_43912_44048"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      );

    case "date-icon":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
          <rect width="20" height="20" rx="3.636" fill="#9D50DD"></rect>
          <g
            filter="url(#filter0_d_43912_44067)"
            fill="#fff"
            clip-path="url(#clip0_43912_44067)"
          >
            <path d="M14.9666 8.1408C15.0359 8.1408 15.1024 8.11327 15.1514 8.06425 15.2004 8.01524 15.228 7.94876 15.228 7.87944V7.74876C15.228 7.33285 15.0628 6.93398 14.7687 6.63989 14.4746 6.34579 14.0757 6.18058 13.6598 6.18058H13.0064V5.42489C13.0064 5.2516 12.9376 5.0854 12.815 4.96286 12.6925 4.84033 12.5263 4.77148 12.353 4.77148 12.1797 4.77148 12.0135 4.84033 11.891 4.96286 11.7684 5.0854 11.6996 5.2516 11.6996 5.42489V6.18058H8.30185V5.42489C8.30185 5.2516 8.23301 5.0854 8.11047 4.96286 7.98793 4.84033 7.82173 4.77148 7.64844 4.77148 7.47514 4.77148 7.30895 4.84033 7.18641 4.96286 7.06387 5.0854 6.99503 5.2516 6.99503 5.42489V6.18058H6.34162C5.92571 6.18058 5.52684 6.34579 5.23275 6.63989 4.93866 6.93398 4.77344 7.33285 4.77344 7.74876V7.87944C4.77344 7.94876 4.80097 8.01524 4.84999 8.06425 4.899 8.11327 4.96548 8.1408 5.0348 8.1408H14.9666zM5.0348 8.86328C4.96548 8.86328 4.899 8.89766 4.84999 8.95886 4.80097 9.02006 4.77344 9.10307 4.77344 9.18962V13.2689C4.77344 13.7882 4.93866 14.2862 5.23275 14.6534 5.52684 15.0206 5.92571 15.2269 6.34162 15.2269H13.6598C14.0757 15.2269 14.4746 15.0206 14.7687 14.6534 15.0628 14.2862 15.228 13.7882 15.228 13.2689V9.18962C15.228 9.10307 15.2004 9.02006 15.1514 8.95886 15.1024 8.89766 15.0359 8.86328 14.9666 8.86328H5.0348z"></path>
          </g>
          <defs>
            <clipPath id="clip0_43912_44067">
              <path
                fill="#fff"
                transform="translate(4.773 4.773)"
                d="M0 0H10.454V10.454H0z"
              ></path>
            </clipPath>
            <filter
              id="filter0_d_43912_44067"
              x="2.955"
              y="3.864"
              width="14.091"
              height="14.091"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy=".909"></feOffset>
              <feGaussianBlur stdDeviation=".909"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43912_44067"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_43912_44067"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      );

    case "taskTitle-icon":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
          <rect
            width="20"
            height="20"
            rx="3.636"
            fill="var(--color-lavender)"
          ></rect>
          <g filter="url(#filter0_d_59610_12628)">
            <path
              d="M3 5.25C2.58579 5.25 2.25 5.58579 2.25 6V7.60714C2.25 8.02135 2.58579 8.35714 3 8.35714C3.41421 8.35714 3.75 8.02135 3.75 7.60714V6.75H5.19727V12.75H4.60742C4.19321 12.75 3.85742 13.0858 3.85742 13.5C3.85742 13.9142 4.19321 14.25 4.60742 14.25H7.28598C7.7002 14.25 8.03598 13.9142 8.03598 13.5C8.03598 13.0858 7.7002 12.75 7.28598 12.75H6.69727V6.75H8.14284V7.60714C8.14284 8.02135 8.47862 8.35714 8.89284 8.35714C9.30705 8.35714 9.64284 8.02135 9.64284 7.60714V6C9.64284 5.58579 9.30705 5.25 8.89284 5.25H5.94727H3ZM11.0352 7.3929C10.6209 7.3929 10.2852 7.72868 10.2852 8.1429V9.75004C10.2852 10.1642 10.6209 10.5 11.0352 10.5C11.4494 10.5 11.7852 10.1642 11.7852 9.75004V8.8929H13.2324V12.75H12.6426C12.2284 12.75 11.8926 13.0858 11.8926 13.5C11.8926 13.9142 12.2284 14.25 12.6426 14.25H13.9749C13.9774 14.25 13.9799 14.25 13.9824 14.25C13.9849 14.25 13.9875 14.25 13.99 14.25H15.3211C15.7354 14.25 16.0711 13.9142 16.0711 13.5C16.0711 13.0858 15.7354 12.75 15.3211 12.75H14.7324V8.8929H16.178V9.75004C16.178 10.1642 16.5138 10.5 16.928 10.5C17.3422 10.5 17.678 10.1642 17.678 9.75004V8.1429C17.678 7.72868 17.3422 7.3929 16.928 7.3929H13.9824H11.0352Z"
              fill="#fff"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_59610_12628"
              x=".43"
              y="4.34"
              width="19.068"
              height="12.64"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy=".91"></feOffset>
              <feGaussianBlur stdDeviation=".91"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_59610_12628"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_59610_12628"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      );

    case "full-rating-icon":
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="20"
          height="20"
          aria-hidden="true"
          class="icon_9666403f60 star-component-button-icon star-component-button-icon-on noFocusStyle_ff05a1eb1d"
          data-testid="icon"
        >
          <path d="M11.2336 3.01626L10.5614 3.34904L11.234 3.01724L13.0145 6.62645L17.0025 7.20743C17.256 7.24569 17.4938 7.354 17.6891 7.52016C17.8843 7.68632 18.0293 7.90371 18.1076 8.14784C18.1859 8.39196 18.1945 8.65312 18.1324 8.90186C18.0703 9.15018 17.9403 9.37628 17.7569 9.55475L17.7559 9.55566L14.8738 12.3658L15.5539 16.3359L15.5542 16.3378C15.5984 16.5918 15.5704 16.8532 15.4733 17.0922C15.3759 17.3317 15.2131 17.5389 15.0034 17.6901C14.7937 17.8414 14.5457 17.9305 14.2877 17.9473C14.0313 17.964 13.7754 17.9085 13.5489 17.7874L9.99916 15.9209L6.4403 17.793C6.21381 17.9142 5.95789 17.9697 5.70148 17.953C5.44349 17.9362 5.19545 17.8471 4.98577 17.6958C4.77609 17.5446 4.61324 17.3374 4.51589 17.0979C4.41876 16.8589 4.39073 16.5975 4.43499 16.3434L4.4353 16.3417L5.11535 12.3715L2.23779 9.55909L2.23676 9.55808C2.05337 9.37963 1.92336 9.15357 1.86134 8.90529C1.79921 8.65655 1.80779 8.39539 1.88612 8.15127C1.96445 7.90714 2.10941 7.68974 2.30467 7.52359C2.49993 7.35743 2.73772 7.24912 2.99123 7.21086L2.99453 7.21037L6.9838 6.6265L8.76473 3.01626C8.87864 2.78619 9.05458 2.59254 9.27269 2.45714C9.49081 2.32175 9.74242 2.25 9.99915 2.25C10.2559 2.25 10.5075 2.32175 10.7256 2.45714C10.9437 2.59254 11.1197 2.78619 11.2336 3.01626Z"></path>
        </svg>
      );

    case "empty-rating-icon":
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="20"
          height="20"
          aria-hidden="true"
          class="icon_9666403f60 star-component-button-icon noFocusStyle_ff05a1eb1d"
          data-testid="icon"
        >
          <path
            d="M11.234 3.016a1.379 1.379 0 0 0-2.47 0l-1.78 3.61-3.99.584h-.003a1.376 1.376 0 0 0-.754 2.348v.001l2.878 2.813-.68 3.97v.001a1.376 1.376 0 0 0 2.005 1.45L10 15.921l3.549 1.866a1.377 1.377 0 0 0 2.005-1.45v-.001l-.68-3.97 2.882-2.81v-.001a1.377 1.377 0 0 0-.753-2.348l-3.989-.58-1.78-3.61Zm-1.235.888L8.3 7.35a1.378 1.378 0 0 1-1.034.752l-3.803.557 2.747 2.685a1.376 1.376 0 0 1 .395 1.22l-.649 3.79 3.404-1.79a1.377 1.377 0 0 1 1.28 0l3.395 1.785-.65-3.79v-.002a1.374 1.374 0 0 1 .396-1.218l2.751-2.683-3.796-.554a1.382 1.382 0 0 1-1.037-.752L10 3.904Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );

    case "pencil":
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          role="img"
          tabIndex="0"
          aria-hidden="false"
          aria-label="Rename"
          class="icon_9666403f60 icon-service-icon noFocusStyle_ff05a1eb1d"
          data-testid="icon"
        >
          <path
            d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );

    case "trash2":
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          role="img"
          tabIndex="0"
          aria-hidden="false"
          aria-label="Delete"
          class="icon_9666403f60 icon-service-icon noFocusStyle_ff05a1eb1d"
          data-testid="icon"
        >
          <path
            d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );

    case "thin-plus":
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="18"
          height="18"
          aria-hidden="true"
          class="icon_9666403f60 add-column-menu-button__icon"
          data-testid="icon"
        >
          <g id="Icon / Basic / Add">
            <path
              id="Union"
              d="M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </g>
        </svg>
      );

    case "main-star":
      return (
        <svg
          viewBox="0 0 33 33"
          fill="currentColor"
          width="25"
          height="25"
          aria-hidden="true"
          className="icon_da9e87501e"
          data-testid="topbar-icon"
        >
          <g clipPath="url(#clip0_1150_158978)">
            <path
              d="M20.3812 4.62863C20.3812 2.47439 18.6357 0.728027 16.4826 0.728027C14.3294 0.728027 12.584 2.47439 12.584 4.62863V8.91568C12.584 11.0699 14.3294 12.8163 16.4826 12.8163C18.6357 12.8163 20.3812 11.0699 20.3812 8.91568V4.62863Z"
              fill="url(#paint0_linear_1150_158978)"
            ></path>
            <path
              d="M5.11916 10.0994C3.07035 9.43366 0.870087 10.554 0.204732 12.6018C-0.460623 14.6495 0.660888 16.8492 2.7097 17.5149L6.78692 18.8397C8.83573 19.5054 11.036 18.385 11.7013 16.3373C12.3667 14.2895 11.2452 12.0898 9.19638 11.4241L5.11916 10.0994Z"
              fill="url(#paint1_linear_1150_158978)"
            ></path>
            <path
              d="M5.59794 26.3042C4.33171 28.0471 4.71733 30.4859 6.45925 31.7514C8.20117 33.017 10.6398 32.6301 11.906 30.8873L14.4259 27.419C15.6921 25.6762 15.3065 23.2374 13.5646 21.9718C11.8226 20.7062 9.38404 21.0931 8.1178 22.8359L5.59794 26.3042Z"
              fill="url(#paint2_linear_1150_158978)"
            ></path>
            <path
              d="M21.1629 30.8429C22.4291 32.5858 24.8677 32.9726 26.6096 31.7071C28.3516 30.4415 28.7372 28.0027 27.471 26.2599L24.9511 22.7916C23.6849 21.0488 21.2463 20.6619 19.5043 21.9275C17.7624 23.193 17.3768 25.6318 18.643 27.3747L21.1629 30.8429Z"
              fill="url(#paint3_linear_1150_158978)"
            ></path>
            <path
              d="M16.5188 21.7056C18.6553 21.7056 20.3872 19.9736 20.3872 17.8372 20.3872 15.7007 18.6553 13.9688 16.5188 13.9688 14.3823 13.9688 12.6504 15.7007 12.6504 17.8372 12.6504 19.9736 14.3823 21.7056 16.5188 21.7056zM3.89332 17.6821C6.04138 17.6821 7.78273 15.9408 7.78273 13.7927 7.78273 11.6447 6.04138 9.90332 3.89332 9.90332 1.74526 9.90332.00390625 11.6447.00390625 13.7927.00390625 15.9408 1.74526 17.6821 3.89332 17.6821zM16.4803 8.49289C18.6322 8.49289 20.3767 6.74844 20.3767 4.59654 20.3767 2.44465 18.6322.700195 16.4803.700195 14.3284.700195 12.584 2.44465 12.584 4.59654 12.584 6.74844 14.3284 8.49289 16.4803 8.49289zM8.75854 32.5044C10.9141 32.5044 12.6616 30.7569 12.6616 28.6013 12.6616 26.4457 10.9141 24.6982 8.75854 24.6982 6.60293 24.6982 4.85547 26.4457 4.85547 28.6013 4.85547 30.7569 6.60293 32.5044 8.75854 32.5044zM24.3244 32.4656C26.4753 32.4656 28.2191 30.7219 28.2191 28.571 28.2191 26.42 26.4753 24.6763 24.3244 24.6763 22.1734 24.6763 20.4297 26.42 20.4297 28.571 20.4297 30.7219 22.1734 32.4656 24.3244 32.4656z"
              fill="#6161FF"
            ></path>
            <path
              d="M27.8808 10.0984C29.9296 9.43268 32.1299 10.5531 32.7953 12.6008C33.4606 14.6486 32.3391 16.8482 30.2903 17.5139L26.2131 18.8387C24.1643 19.5044 21.964 18.384 21.2987 16.3363C20.6333 14.2885 21.7548 12.0888 23.8036 11.4231L27.8808 10.0984Z"
              fill="url(#paint4_linear_1150_158978)"
            ></path>
            <path
              d="M29.1028 17.6807C26.9547 17.6807 25.2134 15.9393 25.2134 13.7913C25.2134 11.6432 26.9547 9.90186 29.1028 9.90186C31.2508 9.90186 32.9922 11.6432 32.9922 13.7913C32.9922 15.9393 31.2508 17.6807 29.1028 17.6807Z"
              fill="#6161FF"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1150_158978"
              x1="16.457"
              y1="-6.763"
              x2="16.543"
              y2="13.595"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
              <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_1150_158978"
              x1="-6.928"
              y1="10.311"
              x2="12.461"
              y2="16.521"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
              <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_1150_158978"
              x1="2.077"
              y1="37.827"
              x2="13.974"
              y2="21.306"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
              <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_1150_158978"
              x1="31.034"
              y1="37.753"
              x2="18.998"
              y2="21.333"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
              <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_1150_158978"
              x1="39.928"
              y1="10.31"
              x2="20.539"
              y2="16.52"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
              <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
            </linearGradient>
            <clipPath id="clip0_1150_158978">
              <path fill="#fff" d="M0 0H33V33H0z"></path>
            </clipPath>
          </defs>
        </svg>
      );
    default:
      console.log("Svg Not Found");
      return <div />;
  }
}

export const SvgCmp = ({ type }) => getSvg(type);
