import Link from "next/link";

const IntroContent = () => {
  return (
    <div className="grow">
      <p><Link href="/character-profile" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '68px',
        background: '#ffffff',
        borderRadius: '3px',
        fontWeight:"bold"
      }}>Create new Character</Link></p>
      <p>Tutaj powinien być przycisk Choose character</p>
    </div>
  );
};
export default IntroContent;
