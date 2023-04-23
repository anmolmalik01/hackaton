import styles from "../styles/skilltest.module.scss"

function skilltest() {
    return (
        <div>
            <header>
                <small>Multiple Choice Quiz w/ jQuery</small>
            </header>
            <div id="emc-score"></div>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <section data-quiz-item>
                        <div className={styles.question}>Are CSS property names case-sensitive?<br />Ex: <code>baCkgRouNd: #333;</code></div>
                        <div className={styles.choices} data-choices='["Yes","No"]'>
                        </div>
                    </section>
                    <section data-quiz-item>
                        <div className={styles.question}>Does setting <code>margin-top:</code> and <code>margin-bottom:</code> have an affect on an inline element?</div>
                        <div className={styles.choices} data-choices='["Yes","No"]'>
                        </div>
                    </section>
                </div>
                <div className={styles.row}>
                    <section data-quiz-item>
                        <div className={styles.question}>The <code>translate()</code> function can move the position of an element on the z-axis.</div>
                        <div className={styles.choices} data-choices='["True","False"]'>
                        </div>
                    </section>
                    <section data-quiz-item>
                        <div className={styles.question}>The pseudo className <code>:checked</code> will select inputs with type radio or checkbox, but not option elements.</div>
                        <div className={styles.choices} data-choices='["True","False"]'>
                        </div>
                    </section>
                </div>
                <div className="row">
                    <section data-quiz-item>
                        <div className={styles.question}>Does setting <code>padding-top:</code> and <code>padding-bottom:</code> on an inline element add to its dimensions?</div>
                        <div className={styles.choices} data-choices='["Yes","No"]'>
                        </div>
                    </section>
                    <section data-quiz-item>
                        <div className={styles.question}>If you have a <code>p</code> element with <code>font-size: 10rem;</code>, will the text be responsive when the user resizes / drags the browser window?</div>
                        <div className={styles.choices} data-choices='["Yes","No"]'>
                        </div>
                    </section>
                </div>
                <div className="row last">
                    <section data-quiz-item>
                        <div className={styles.question}>In a HTML document, the pseudo className <code>:root</code> always refers to the html element.</div>
                        <div className={styles.choices} data-choices='["True","False"]'>
                        </div>
                    </section>
                    <section data-quiz-item>
                        <div className={styles.question}>The formula context/target = result is useful when building responsive layouts.</div>
                        <div className={styles.choices} data-choices='["True","False"]'>
                        </div>
                    </section>
                </div>
                <div className={styles.submit}>
                    <button id="emc-submit">Submit Answers</button>
                </div>
            </div>

            <footer>
                <div id="emc-progress"></div>
            </footer>
            <div className={styles.attrib}>
                <p>Take the full quiz <i className="fa fa-long-arrow-right"></i> <a href="http://davidshariff.com/quiz/" target="_blank">http://davidshariff.com/quiz/</a></p>
            </div>

        </div>
    )
}

export default skilltest