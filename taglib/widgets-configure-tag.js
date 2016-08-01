module.exports = function render(input, out) {
  if (!out.global.widgetsConfig) {
    out.global.widgetsConfig = {}
  }
  out.global.widgetsConfig.disableStateSerialization = input.serializeState === false;
};
