# Streamlit Discourse

[![GitHub][github_badge]][github_link] [![PyPI][pypi_badge]][pypi_link] 

## Installation

```sh
pip install streamlit-discourse
```

## Quick usage

```python
from streamlit_discourse import st_discourse

# https://discuss.streamlit.io/t/discourse-component/8061

discourse_url = "discuss.streamlit.io"
topic_id = 8061

st_discourse(discourse_url, topic_id)
```

## Demo

[![Demo preview][share_img]][share_link]

[![Preview][share_img]][share_link]

[share_badge]: https://static.streamlit.io/badges/streamlit_badge_black_white.svg
[share_link]: https://share.streamlit.io/okld/streamlit-gallery/main?p=discourse
[share_img]: https://raw.githubusercontent.com/okld/streamlit-discourse/main/preview.png

[github_badge]: https://badgen.net/badge/icon/GitHub?icon=github&color=black&label
[github_link]: https://github.com/okld/streamlit-discourse

[pypi_badge]: https://badgen.net/pypi/v/streamlit-discourse?icon=pypi&color=black&label
[pypi_link]: https://pypi.org/project/streamlit-discourse
