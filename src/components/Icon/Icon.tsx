type Props = {
  icon: React.FC<{
    color: string;
  }>;
};

export const Icon: React.FC<Props> = ({ icon: SvgIcon }) => {
  return <SvgIcon color="var(--base-color)" />;
};
