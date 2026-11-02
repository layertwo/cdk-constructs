ARG PYTHON_VERSION=3.15

# SAM build image: Lambda's Python, build toolchain, and uv are already installed.
FROM public.ecr.aws/sam/build-python${PYTHON_VERSION}:latest

ARG PYTHON_VERSION

ENV UV_CACHE_DIR=/tmp/uv-cache
ENV UV_PYTHON=${PYTHON_VERSION}
ENV UV_PYTHON_DOWNLOADS=never

RUN mkdir -p /tmp/uv-cache \
  && chmod -R a+rwX /tmp/uv-cache

WORKDIR /asset-output
