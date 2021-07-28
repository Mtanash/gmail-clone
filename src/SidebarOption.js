import React from "react";

function SidebarOption({
  Icon,
  title,
  number = 0,
  active = false,
  toggable = false,
  toggleIcons = null,
  toggleFunction = null,
  showCategoryState = null,
}) {
  if (toggable && toggleIcons) {
    return (
      <div
        className={`${active ? "sidebar__option active" : "sidebar__option"}`}
        onClick={toggable ? toggleFunction : null}
      >
        {showCategoryState ? (
          <toggleIcons.true className="toggleIcon" />
        ) : (
          <toggleIcons.false className="toggleIcon" />
        )}
        <Icon className="optionIcon" />
        <h3>{title}</h3>
        <span>{number > 0 && number}</span>
      </div>
    );
  } else if (toggable) {
    return (
      <div
        className={`${active ? "sidebar__option active" : "sidebar__option"}`}
        onClick={toggable ? toggleFunction : null}
      >
        <Icon className="optionIcon" />
        <h3>{title}</h3>
        <span>{number > 0 && number}</span>
      </div>
    );
  } else {
    return (
      <div
        className={`${active ? "sidebar__option active" : "sidebar__option"}`}
        onClick={toggable ? toggleFunction : null}
      >
        {toggable &&
          (!showCategoryState ? (
            <toggleIcons.Right className="toggleIcon" />
          ) : (
            <toggleIcons.Down className="toggleIcon" />
          ))}
        <Icon className="optionIcon" />
        <h3>{title}</h3>
        <span>{number > 0 && number}</span>
      </div>
    );
  }
}

export default SidebarOption;
