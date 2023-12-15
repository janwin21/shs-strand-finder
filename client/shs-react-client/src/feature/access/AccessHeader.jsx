function AccessHeader({ email = null }) {
  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Access Control</h2>
          <p className="card-text my-4 roboto">
            {`Hello, ${
              email ? email : "unknown"
            }! We wanted to inform you that you now have the authority to create and manage data within this system. Additionally, you have the ability to assign privileges to other students, empowering them to become administrators as well.`}
          </p>
        </div>
      </header>
    </>
  );
}

export default AccessHeader;
