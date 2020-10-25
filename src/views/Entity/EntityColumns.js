const BOOLEAN_COLUMNS = ['emailValidated', 'mobileValidated', 'phoneValidated', 'active', 'disabled', 'permanent', 'deleted', 'protected', 'hidden', 'special', 'hot', 'new'];
const NUMERIC_COLUMNS = ['number', 'weight', 'hits', 'likes', 'rate', 'count', 'order'];
const DATETIME_COLUMNS = ['mobileCodeDate', 'phoneCodeDate', 'emailCodeDate', 'loginDate', 'passwordChangeDate'];
const ALIGN_COLUMNS = ['align', 'pictureAlign', 'photoAlign', 'mediaAlign'];
const TEXTAREA_COLUMNS = ['fullDesc', 'description', 'content'];
const DICTIONARY_COLUMNS = ['dataset', 'socials', 'skills'];

export {
    BOOLEAN_COLUMNS,
    NUMERIC_COLUMNS,
    DATETIME_COLUMNS,
    ALIGN_COLUMNS,
    TEXTAREA_COLUMNS,
    DICTIONARY_COLUMNS
}