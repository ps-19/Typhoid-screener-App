import { React } from 'react'
import './Service.css'
import Btn from '../../components/Button/Button'

function service() {
  return (
    <>
      <div className="wallpaper Service">
        <div className="col-8 mx-auto">
          <form className="fm" action="/service" method="post">
            <h1 className="title">Typhoid Data Form</h1>
            <p>Please help us to diagnose by filling in our Data form. Thank you!</p>
            <h4 className="cd">Name</h4>
            <div className="name">
              <input className="inp sl" type="text" name="firstname" placeholder=" First Name" />
              <input className="inp sl" type="text" name="lastname" placeholder=" Last Name" />
            </div>
            <h4 className="cd">Email</h4>
            <input className="inp sl" type="text" name="email" placeholder=" Email Id" />
            <h4 className="cd">Country<span className="sp"> *</span></h4>
            <select className="sl" name="location" required>
              <option className="opt disabled" value="" disabled selected>*Please Select*</option>
              <option className="opt" value="India">India</option>
              <option className="opt" value="Nigeria">Nigeria</option>
              <option className="opt" value="South Africa">South Africa</option>
              <option className="opt" value="America">America</option>
              <option className="opt" value="Russia">Russia</option>
              <option className="opt" value="China">China</option>
              <option className="opt" value="South_Korea">South Korea</option>
            </select>
            <h4 className="cd">Age<span className="sp"> *</span></h4>
            <select className="sl" name="age" required>
              <option className="opt disabled" value="" disabled selected>*Please Select*</option>
              <option className="opt" value="under 13">Under 13</option>
              <option className="opt" value="13-17">13-17</option>
              <option className="opt" value="18-24">18-24</option>
              <option className="opt" value="25-34">25-34</option>
              <option className="opt" value="35-44">35-44</option>
              <option className="opt" value="45-54">45-54</option>
              <option className="opt" value="55 or older">55 or older</option>
            </select>
            <h4 className="cd">Today's Date</h4>
            <div className="day-visited">
              <input className="inp" type="date" name="dayvisited" />
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h4 className="cd little"><b>Please tell us the symptoms you are experiencing!</b></h4>
            <table className="tbl">
              <tr>
                <th className="tblheading first-col"><b>Symptoms 😷</b></th>
                <th className="tblheading"><b>Yes, I am observing the <b className='tblhead'>High</b> symptom! 😢</b></th>
                <th className="tblheading"><b>I am observing the <b className='tblhead'>Low</b> symptom! 😞</b></th>
                <th className="tblheading"><b><b className='tblhead2'>No</b>, symptom is either not observed or observed rarely! 😐</b></th>
              </tr>
              <tr>
                <td className="tbldata first-col" >Fever<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Fever" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Fever" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Fever" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Abdominal Pain<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Abdominal_pain" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Abdominal_pain" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Abdominal_pain" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Cough<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Cough" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Cough" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Cough" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Diarrhea<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Diarrheoa" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Diarrheoa" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Diarrheoa" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Constipation<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Constipation" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Constipation" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Constipation" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Rose Spots<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Rose_spots" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Rose_spots" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Rose_spots" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Muscle Weakness<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Muscle_weakness" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Muscle_weakness" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Muscle_weakness" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Anorexia<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Anorexia" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Anorexia" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Anorexia" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Headache<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Headache" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Headache" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Headache" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Skin Rash<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Skin_Rash" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Skin_Rash" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Skin_Rash" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Weightless<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Weightless" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Weightless" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Weightless" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Stomach Distention<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Stomach_distention" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Stomach_distention" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Stomach_distention" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Malaise<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Malaise" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Malaise" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Malaise" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Occult Blood In Stool<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Occult_blood_in_stool" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Occult_blood_in_stool" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Occult_blood_in_stool" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Haemorrahages<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Haemorrahages" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Haemorrahages" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Haemorrahages" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Derilium<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Derilium" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Derilium" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Derilium" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Abdominal Rigidity<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Abdominal_rigidity" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Abdominal_rigidity" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Abdominal_rigidity" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Epistaxis<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Epistaxis" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Epistaxis" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Epistaxis" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Loss Of Appetite<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Loss_of_appetite" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Loss_of_appetite" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Loss_of_appetite" required /></td>
              </tr>
              <tr>
                <td className="tbldata first-col">Temperature<span className="sp"> *</span></td>
                <td className="tbldata"><input className="inp" type="radio" value="High" name="Temperature" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="Low" name="Temperature" required /></td>
                <td className="tbldata"><input className="inp" type="radio" value="No" name="Temperature" required /></td>
              </tr>
            </table>
            <h4 className="cd little">Any comments, questions or suggestions?</h4>
            <textarea className="txt txtclarea" name="comment" rows="5"></textarea>
            <Btn text="Check Online" className="btn2" type="submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default service