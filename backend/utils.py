from asyncpg import Record


def record_to_dict(record):
    """
    Convert an asyncpg.Record (including nested records) to a dictionary.

    :param record: The asyncpg.Record object to convert.
    :return: A dictionary representation of the record.
    """
    if isinstance(record, Record):
        # Convert Record to a dictionary
        return {key: record_to_dict(value) for key, value in record.items()}
    elif isinstance(record, list):
        # Convert a list of Records or other values
        return [record_to_dict(item) for item in record]
    else:
        # Return the value as-is for non-Record types
        return record
