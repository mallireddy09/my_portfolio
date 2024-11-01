import React from 'react'
import styled from 'styled-components';
import {InnerLayout, InnerLayoutSingle} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import SkillSphere from './SkillSphere';
import './styles.css'

function Skills({theme}) {
    return (
        <SkillsStyled>
            
                <Title title={'Skills'} span={'skills'} />
                <div style={{display:'flex'}} className='skillMain'>
                    <div style={{width:'40%'}} className="skillText">
                        <InnerLayoutSingle>
                        <div className='skillsSingle'>
                            <ProgressBar 
                                title={'PYTHON'}
                                width={'85%'}
                                text={'85%'}
                            />
                            <ProgressBar 
                            title={'SQL'}
                            width={'85%'}
                            text={'85%'}
                            />
                            <ProgressBar 
                            title={'R'}
                            width={'70%'}
                            text={'70%'}
                            />
                            <ProgressBar 
                            title={'AI/ML'}
                            width={'70%'}
                            text={'70%'}
                            />
                            <ProgressBar 
                            title={'JAVA'}
                            width={'40%'}
                            text={'40%'}
                            />
                            <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'50%'}
                            text={'50%'}
                            />
                            <ProgressBar 
                                title={'AWS'}
                                width={'60%'}
                                text={'60%'}
                            />
                            </div>
                        </InnerLayoutSingle>
                    </div>
                    <SkillSphere theme={theme}/>
                </div>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'React Js'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'React Native'}
                            width={'60%'}
                            text={'60%'}
                        />
                        
                    </div>
                    <div>
                        <br/> <br/>
                        <div>
                            <span className="seo-heading">Languages:</span><br/>
                            <p className="seo-link"><br/>
                            Python, R, SQL, Core Java, JavaScript
                            </p><br/>
                            <span className="seo-heading">Databases:</span><br/><br/>
                            <p className="seo-link">
                            MySQL, PostgreSQL, MongoDB
                            </p><br/>
                            <div>
                            <span className="seo-heading">Cloud:</span><br/>
                            <p className="seo-link"><br/>
                            AWS (S3, EC2)
                            </p><br/>
                            
                            <span className="seo-heading">Tools:</span><br/>
                            <p className="seo-link"><br/>
                            Tableau, Excel, Apache Spark, GitLab
                            </p><br/>
                            <span className="seo-heading">Frameworks:</span><br/>
                            <p className="seo-link"><br/>
                            Pandas, NumPy, Seaborn, Sk-learn, Hadoop, Flask, Spark, React, React Native
                            </p><br/>
                            <span className="seo-heading">Competencies:</span><br/>
                            <p className="seo-link"><br/>
                            Data Warehousing, Data Modeling, Performance Tuning, ETL Processes
                            </p><br/>

                            <p className="seo-heading">LeetCode Profile:</p><br/>
                            <p>
                                <a href="https://leetcode.com/u/mallikarjun09/" className="seo-link">
                                <img src={`https://leetcard.jacoblin.cool/mallikarjun09?theme=${theme === 'light-theme' ? 'light' : 'dark'}&font=Gowun%20Batang&ext=heatmap&border=0`} alt="leetcode"/>
                                </a>
                                <br />
                            </p>
                            </div>
                        </div>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .skillsSingle{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
