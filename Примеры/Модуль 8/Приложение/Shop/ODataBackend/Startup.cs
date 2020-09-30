using IIS.Shop;

using Microsoft.Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace IIS.Shop
{
    using System.Text;
    using System.Web.Http;

    using ICSharpCode.SharpZipLib.Zip;

    using ICSSoft.STORMNET;

    using Owin;

    using Unity;

    public class Startup
    {
        private static void Configure(HttpConfiguration config, IUnityContainer container)
        {
            LogService.LogInfo("Инициирован запуск приложения.");

            ODataConfig.Configure(config, container, GlobalConfiguration.DefaultServer);
        }

        public void Configuration(IAppBuilder app)
        {
            var container = UnityConfig.Container;

            GlobalConfiguration.Configure(configuration => Configure(configuration, container));
            ZipConstants.DefaultCodePage = Encoding.Default.CodePage;
        }
    }
}