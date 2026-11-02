ARG UV_VERSION=0.13.6
FROM ghcr.io/astral-sh/uv:${UV_VERSION} AS uv

FROM public.ecr.aws/amazonlinux/amazonlinux:2023

ARG PYTHON_VERSION=3.15

COPY --from=uv /uv /uvx /bin/

ENV UV_PYTHON_INSTALL_DIR=/opt/uv-python
ENV UV_CACHE_DIR=/tmp/uv-cache
RUN dnf install -y tar gzip findutils \
 && uv python install ${PYTHON_VERSION} \
 && chmod -R a+rX /opt/uv-python \
 && mkdir -p /tmp/uv-cache \
 && chmod -R a+rwX /tmp/uv-cache \
 && dnf clean all

ENV UV_PYTHON=${PYTHON_VERSION}
ENV UV_PYTHON_DOWNLOADS=never

WORKDIR /asset-output
