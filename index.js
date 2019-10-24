const rules = require('@commitlint/rules')

const subjectCaseRuleReplacement = (parsed, when, value) => {
  let {subject, references} = parsed
  references.filter(reference => !!reference.issue)
    .forEach(reference => {
      subject = subject.replace(new RegExp(`${reference.prefix}\\d+`), '').trim()
    })
  return rules['subject-case']({ ...parsed, subject  }, when, value)
}

module.exports = {
  rules: {
    'subject-case': subjectCaseRuleReplacement
  }
}
