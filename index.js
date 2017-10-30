module.exports = styles => {
  return (...classNames) =>
      classNames.map(className =>
          styles[className]).join(" ");
};