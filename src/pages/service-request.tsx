import '../assets/styles/service-request-page.css'

function ServiceRequestPage() {
  return (
    <main>
        <div className="service-request-header">
            <header>
                <h2>Service Request</h2>
            </header>
            <ul className="service-request-tracker">
                <li>Details</li>
                <li>Access</li>
                <li>Review</li>
            </ul>
        </div>
        <div className="service-request-content">
            <h3><span>Request details</span></h3>
            <p>Please describe your issue with as much detail and upload pictures if possible when submitting. Please make sure to provide the make and model number if applicable.
                <br />
                <span>If this is a life threatening situation, please dial 911 immediately</span>
            </p>

            <div className="service-request-textarea">
                <label htmlFor='incident-description'>Description *</label>
                <input id='incident-description' placeholder='' required></input>
            </div> 

            <div className="service-request-textarea">
                <label htmlFor='incident-location'>Incident Location *</label>
                <input id='incident-location' placeholder='' required></input>
            </div>  

            <div className="service-request-drop-down">
                <label htmlFor="services">Choose a service:</label>
                <select name="services" id="services" required>
                <option value="">--Please choose an option--</option>
                <option value="appliance">Appliance</option>
                <option value="cleaning">Cleaning</option>
                <option value="doors-and-windows">Doors and Windows</option>
                <option value="flooring">Flooring</option>
                </select>  
            </div>

            <div className="service-request-drop-down">
                <label htmlFor="priority">Choose a priority:</label>
                <select name="priority" id="priority" required>
                <option value="">--Please choose an option--</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                </select>  
            </div>

            <div className="service-request-file-upload">
                <label htmlFor="issue-photos">Issue Photos (optional):</label>
                <input type="file" id="issue-photos" name="issue-photos" accept="image/*" multiple />
            </div>

            <div className="service-request-file-upload">
                <label htmlFor="other-file">Other File (optional):</label>
                <input type="file" id="other-file" name="other-file" multiple />
            </div>

            <button className="service-request-submit" type="submit">Submit</button> 
        </div>       
    </main>
  )
}

export default ServiceRequestPage
