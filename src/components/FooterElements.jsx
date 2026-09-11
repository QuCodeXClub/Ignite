const FooterElements = () => {
  return (
    <div className="bottom-bar">
      <div className="avatars">
        <div className="avatar-group">
          <img src="https://i.pravatar.cc/100?img=11" alt="student" />
          <img src="https://i.pravatar.cc/100?img=12" alt="student" />
          <img src="https://i.pravatar.cc/100?img=13" alt="student" />
        </div>
        <div className="avatars-text">
          <strong>500+ students</strong><br/>
        </div>
      </div>

      <div className="bottom-center">
ONE CAMPUS - ONE SPIRIT
</div>

      <div className="scroll-indicator">
        SCROLL
        <div className="mouse-icon"></div>
      </div>
      
      <div className="page-num">
        01 / 06
      </div>
    </div>
  );
};

export default FooterElements;
