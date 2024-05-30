import React from "react";
import styles from "../../styles/group/groupPage.module.css";
import Title from "../../componets/common/Title";
import SuggestedRow from "./SuggestedRow";

function Group() {
  return (
    <>
      <Title title="THENORTHPOLE COMMUNITY" />
      <div className={styles.groupContainer}>
        <div className={styles.descContainer}>
          <h3>No Posts to Show</h3>
          <p>
            Check out the available groups for you to join and start posting.
          </p>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search Groups..." />
          <h4>Suggests Groups</h4>
          <SuggestedRow />
        </div>
      </div>
    </>
  );
}

export default Group;
