## ~~~~  Hello Docker  ~~~~ 

### basic
- docker build -t image_name .
- docker run --name container_name -dp 4000:4000 -v $(pwd):/app image_name    [pwd-> print work directory]
- docker exec -it container_name bash

### Volumes type
1- bind mount
  * -v $(pwd):/app      2 way bind
  * -v $(pwd):/app:ro   [ro => read only]   1 way bind  local to docker not revers
