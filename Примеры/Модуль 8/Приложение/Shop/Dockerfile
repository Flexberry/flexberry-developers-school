FROM mono AS build

WORKDIR /src
COPY . .
RUN nuget restore "Shop.sln"
RUN msbuild "Shop.sln" /p:Configuration=Release

FROM build AS publish

COPY --from=build /src/ODataBackend/bin /app/publish/bin
COPY --from=build /src/ODataBackend/Web.config /app/publish

FROM flexberry/mono-xsp AS final

# https://github.com/Flexberry/dockerfiles/blob/master/alt.p8-apache2-mono/4/README.md
ENV XMLTEMPLATES="/app/Web.config"

COPY --from=publish /app/publish /app
WORKDIR /app

RUN ls -la \
  && ls -la bin