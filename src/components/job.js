function Job() {
  return (
    <div className="grid grid-cols-1 gap-6 py-4">
      <h2 className="text-heading">Employment History</h2>
      <form>
        <h2 className="text-xl italic pb-4">Company Information</h2>
        <label>Employer Name:</label><input type="text" className="form-cmp"/>
        <label>Location:</label><input type="text" className="form-cmp"/>
        <label>Approx. Number of Staff:</label><input type="number" className="form-cmp"/>
        <label>Nature of Business:</label><input type="text" className="form-cmp"/>
        <h2 className="text-xl italic py-4">Job Information</h2>
        <label>Job Title:</label><input type="text" className="form-cmp"/>
        <label>Responsibilities:</label><textarea className="form-textarea form-cmp"></textarea>
        <label>Achievements:</label><textarea className="form-textarea form-cmp"></textarea>
      </form>
      <div className="grid grid-cols-2 gap-4">
        <div><button type="submit" className="btn-add">Add Another</button></div>
        <div><button type="submit" className="btn-next">Next Page</button></div>
      </div>    
    </div>
  )
}

export default Job