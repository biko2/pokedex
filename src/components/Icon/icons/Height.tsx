type IconProps = {
  color: string;
};

export const Height: React.FC<IconProps> = ({ color }) => {
  return (
    <svg
      role="img"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0H5C4.44781 0 4 0.447812 4 1V15C4 15.5522 4.44781 16 5 16H11C11.5522 16 12 15.5522 12 15V1C12 0.447812 11.5522 0 11 0ZM5 15V1H11V3H9.25C9.11188 3 9 3.11188 9 3.25V3.75C9 3.88812 9.11188 4 9.25 4H11V6H9.25C9.11188 6 9 6.11188 9 6.25V6.75C9 6.88812 9.11188 7 9.25 7H11V9H9.25C9.11188 9 9 9.11187 9 9.25V9.75C9 9.88813 9.11188 10 9.25 10H11V12H9.25C9.11188 12 9 12.1119 9 12.25V12.75C9 12.8881 9.11188 13 9.25 13H11V15H5Z"
        fill={color}
      />
    </svg>
  );
};
