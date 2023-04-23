import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '../styles/resume.module.scss';

function resume() {

    


    return (
        
        <div className='top'>
            <Header />
            <div id="javascript_header"></div>
            <form className='form'>
                <div className={styles.form__header}>
                    <h1>Build Your Resume</h1>
                    <p>Enter the fields below to generate an html resume</p>
                </div>

                <h2>Personal Details</h2>

                <div className={styles.formgroup}>
                    <label for="name">Full Name <span>*</span></label>
                    <input type="text" name="name" id="name" placeholder="Robert Norman Ross" />
                        <div id="name__error" className={styles.error}></div>
                </div>

                <div className={styles.formgroup}>
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="4059 Mt Lee Dr. Hollywood, CA 90068" />
                </div>

                <div className={styles.formgroup}>
                    <label for="phone">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder="+1  123 456 7890" />
                </div>

                <div className={styles.formgroup}>
                    <label for="email">Email <span>*</span></label>
                    <input type="text" name="email" id="email" placeholder="example@mail.com" />
                        <div id="email__error" className={styles.error}></div>
                </div>

                <div className={styles.formgroup}>
                    <label for="about">About You</label>
                    <textarea className="textarea" name="about" id="about"
                        placeholder="Three or four sentences about your personality, work ethic, interests, and/or more"></textarea>
                </div>

                <div className={styles.formgroup}>
                    <label for="career">Career Objectives</label>
                    <textarea className="textarea" name="career" id="career"
                        placeholder="One or two sentences about what you wish to accomplish in your career"></textarea>
                </div>

                <div className={styles.formgroup}>
                    <label for="education">Education</label>
                    <textarea className="textarea" name="education" id="education"
                        placeholder="List any completed high school, college, or other educational programs"></textarea>
                </div>

                <div className={styles.linebreak}></div>

                <h2>Work Experience</h2>

                <h3>Most Recent Job</h3>

                <div className={styles.formdategroup}>
                    <div className={styles.formgroup}>
                        <label for="job-1__start">Start Date</label>
                        <input type="date" name="job-1__start" id="job-1__start" />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="job-1__end">End Date</label>
                        <input type="date" name="job-1__end" id="job-1__end" />
                    </div>
                </div>

                <div className={styles.formgroup}>
                    <label for="job-1__details">Position Details</label>
                    <textarea className="textarea" name="job-1__details" id="job-1__details"></textarea>
                </div>

                <div className={styles.linebreak}></div>

                <h3>Past Job</h3>

                <div className={styles.formdategroup}>
                    <div className={styles.formgroup}>
                        <label for="job-2__start">Start Date</label>
                        <input type="date" name="job-2__start" id="job-2__start" />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="job-2__end">End Date</label>
                        <input type="date" name="job-2__end" id="job-2__end" />
                    </div>
                </div>

                <div className={styles.formgroup}>
                    <label for="job-2__details">Position Details</label>
                    <textarea className="textarea" name="job-2__details" id="job-2__details"></textarea>
                </div>

                <div className={styles.linebreak}></div>

                <h3>Another Past Job</h3>

                <div className={styles.formdategroup}>
                    <div className={styles.formgroup}>
                        <label for="job-3__start">Start Date</label>
                        <input type="date" name="job-3__start" id="job-3__start" />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="job-3__end">End Date</label>
                        <input type="date" name="job-3__end" id="job-3__end" />
                    </div>
                </div>

                <div className={styles.formgroup}>
                    <label for="job-3__details">Position Details</label>
                    <textarea className="textarea" name="job-3__details" id="job-3__details"></textarea>
                </div>

                <div className={styles.linebreak}></div>

                <div className={styles.formgroup}>
                    <label for="references">References</label>
                    <textarea className="textarea" name="references" id="references"></textarea>
                </div>

                <div className={styles.linebreak}></div>

                <input type="submit" value="Create Resume" id="create-resume" />
                <input type="submit" value="Feedback from industry expert..." id="create-resume" />

            </form>
            <Footer />
        </div>
    )
}

export default resume