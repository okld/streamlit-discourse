from pathlib import Path
from streamlit.components.v1 import declare_component

_RELEASE = True

if not _RELEASE:
    _component_func = declare_component("streamlit_discourse", url="http://localhost:3001")
else:
    _component_path = (Path(__file__).parent/"frontend"/"build").resolve()
    _component_func = declare_component("streamlit_discourse", path=_component_path)


def st_discourse(
    discourse_url,
    topic_id,
    key=None
) -> None:
    """Embed a Discourse topic.

    Parameters
    ----------
    discourse_url : str
        Discourse domain or URL. This Streamlit app domain must be
        authorized in your Discourse settings. For more information,
        please refer to step 1 to 3 here: https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963#configuring-discourse-for-embedding-simple-setup
    topic_id : int
        The topic ID you want to display.
    key : str or None
        An optional string to use as the unique key for the widget.
        If this is omitted, a key will be generated for the widget
        based on its content. Multiple widgets of the same type may
        not share the same key.

    """
    _component_func(
        discourseUrl=discourse_url,
        topicId=topic_id,
        key=key,
        default=None
    )
