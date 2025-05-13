// Icons from Untitled UI (SVG icons)
// This file provides commonly used icons across the design system

export const Icons = {
  // Alert/Feedback icons
  AlertCircle: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5.33337V8.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6666H8.00667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  AlertTriangle: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.86 2.57335L1.21333 12C1.09693 12.2016 1.03533 12.4302 1.03467 12.663C1.03402 12.8958 1.09434 13.1248 1.20963 13.3272C1.32492 13.5296 1.49116 13.6979 1.69262 13.8155C1.89408 13.9332 2.12325 13.9962 2.356 14H13.6467C13.8794 13.9962 14.1086 13.9332 14.3101 13.8155C14.5115 13.6979 14.6778 13.5296 14.7931 13.3272C14.9083 13.1248 14.9687 12.8958 14.968 12.663C14.9674 12.4302 14.9057 12.2016 14.7893 12L9.14267 2.57335C9.0244 2.37742 8.85632 2.21543 8.65553 2.10233C8.45474 1.98923 8.22693 1.92866 7.99533 1.92596C7.76373 1.92326 7.53446 1.97853 7.33076 2.08702C7.12706 2.19552 6.95568 2.35356 6.83333 2.54668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6H8.00667V9.33333H8.01333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H8.00667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  CheckCircle: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2004 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89028 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.25317 8.99205 1.34776 7.55755C1.44235 6.12305 1.99812 4.75756 2.93186 3.66473C3.8656 2.57189 5.12619 1.81027 6.5308 1.49344C7.93541 1.17662 9.40693 1.32157 10.7133 1.90668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 2.66667L8 9.34001L6 7.34001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  XCircle: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  // Close/X icon
  X: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  // Star icons for rating
  Star: ({ filled = true }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.66669L12.575 6.88335L18.3334 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85002 17.5167L5.83335 11.7834L1.66669 7.72502L7.42502 6.88335L10 1.66669Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  ),
  
  // Plus/Minus icons for ToggleCounter
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33331V12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  Minus: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  // Checkbox/Radio icons
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Dropdown icons
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Loading indicator
  LoadingSpinner: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default Icons; 