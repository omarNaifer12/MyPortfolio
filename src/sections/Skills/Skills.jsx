import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node Js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React Js" />
        <SkillList src={checkMarkIcon} skill="React Native" />
        <SkillList src={checkMarkIcon} skill="c++" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="express Js" />
        <SkillList src={checkMarkIcon} skill="mysQl" />
        <SkillList src={checkMarkIcon} skill="mongo Db" />
        <SkillList src={checkMarkIcon} skill="git" />
        <SkillList src={checkMarkIcon} skill="github" />
      </div>
    </section>
  );
}

export default Skills;
